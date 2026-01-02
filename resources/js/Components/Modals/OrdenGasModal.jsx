import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function OrdenGasModal({ show, onClose, onSuccess }) {
    const { auth, csrf_token } = usePage().props; // Asegúrate de pasar csrf_token desde el HandleInertiaRequests o usa meta tag
    const [tiposTanque, setTiposTanque] = useState([]);
    const [form, setForm] = useState({
        id_tipotanque: '',
        litros: '',
        metodoPago: ''
    });

    // Obtener token CSRF del meta tag si no viene en props
    const getCsrfToken = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    useEffect(() => {
        if (show) {
            fetch('/api/tipos-tanque')
                .then(res => res.json())
                .then(data => setTiposTanque(data))
                .catch(err => console.error(err));
        }
    }, [show]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.metodoPago === 'tarjeta') {
            // Lógica para Stripe: Crear form dinámico y enviar
            const hiddenForm = document.createElement('form');
            hiddenForm.method = 'POST';
            hiddenForm.action = route('#');

            const inputs = [
                { name: '_token', value: getCsrfToken() },
                { name: 'metodo_pago', value: 'tarjeta' },
                { name: 'litros', value: form.litros },
                { name: 'id_tipotanque', value: form.id_tipotanque }
            ];

            inputs.forEach(field => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = field.name;
                input.value = field.value;
                hiddenForm.appendChild(input);
            });

            document.body.appendChild(hiddenForm);
            hiddenForm.submit();

        } else {
            // Pago en Efectivo (Fetch)
            const formData = new FormData();
            formData.append('id_usuario', auth.user?.id || 1);
            formData.append('productos[0][id_tipotanque]', form.id_tipotanque);
            formData.append('productos[0][litros]', form.litros);
            formData.append('metodo_pago', 'efectivo');

            // Necesitamos el CSRF para fetch POST en Laravel
            const token = getCsrfToken();

            fetch('/api/pedidos/crear', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': token,
                    'Accept': 'application/json'
                },
                body: formData,
            })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert('Error: ' + data.error);
                } else {
                    onClose();
                    setForm({ id_tipotanque: '', litros: '', metodoPago: '' }); // Reset
                    onSuccess(); // Abrir modal éxito
                }
            })
            .catch(err => console.error(err));
        }
    };

    if (!show) return null;

    return (
        <div className="modal-backdrop-custom d-flex justify-content-center align-items-center">
            <div className="modal-content-custom p-4 rounded shadow bg-white" style={{ maxWidth: '500px' }}>
                <div className="modal-header-custom d-flex justify-content-between align-items-center border-bottom mb-3">
                    <h5 className="m-0 text-dark"><i className="fas fa-gas-pump text-danger me-2"></i> Pedido de Gas</h5>
                    <button type="button" className="modal-close-btn btn" onClick={onClose}>&times;</button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Tipo de Tanque</label>
                        <select 
                            className="form-select" 
                            value={form.id_tipotanque}
                            onChange={e => setForm({...form, id_tipotanque: e.target.value})}
                            required
                        >
                            <option disabled value="">Selecciona un tipo</option>
                            {tiposTanque.map(tipo => (
                                <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cantidad de Gas (kg)</label>
                        <input 
                            type="number" 
                            className="form-control"
                            value={form.litros}
                            onChange={e => setForm({...form, litros: e.target.value})}
                            min="1" required 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold">Método de pago</label>
                        <div className="d-flex gap-3 flex-wrap">
                            <label className="border rounded p-3 d-flex align-items-center flex-grow-1 cursor-pointer">
                                <input type="radio" className="form-check-input me-3" value="efectivo" 
                                    checked={form.metodoPago === 'efectivo'}
                                    onChange={e => setForm({...form, metodoPago: e.target.value})}
                                    required />
                                <span><i className="fas fa-money-bill-wave text-success me-2"></i> Efectivo</span>
                            </label>
                            <label className="border rounded p-3 d-flex align-items-center flex-grow-1 cursor-pointer">
                                <input type="radio" className="form-check-input me-3" value="tarjeta"
                                    checked={form.metodoPago === 'tarjeta'}
                                    onChange={e => setForm({...form, metodoPago: e.target.value})}
                                    required />
                                <span><i className="fas fa-credit-card text-primary me-2"></i> Tarjeta</span>
                            </label>
                        </div>
                    </div>

                    <div className="modal-footer-custom d-flex justify-content-end gap-2">
                        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="btn btn-danger" disabled={!form.metodoPago}>Enviar Pedido</button>
                    </div>
                </form>
            </div>
        </div>
    );
}