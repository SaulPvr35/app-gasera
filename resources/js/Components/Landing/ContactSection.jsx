import React from 'react';

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí agregarías la lógica para enviar el contacto
        alert("Mensaje enviado (lógica pendiente)");
    };

    return (
        <section id="contacto" className="section section--contact py-5">
            <div className="container">
                <h2 className="section-title text-center mb-4">Contáctanos</h2>
                <div className="row g-4">
                    {/* Información de contacto */}
                    <div className="col-md-6">
                        <div className="contact-card p-4 rounded shadow-sm bg-white">
                            <p className="mb-2">
                                <strong>Email: </strong>
                                <a href="mailto:contacto@gasera.com">contacto@gasera.com</a>
                            </p>
                            <p className="mb-2">
                                <strong>Teléfono: </strong>
                                <a href="tel:+529999429090">(999) 9999999</a>
                            </p>
                            <p>
                                Estamos listos para atender tus dudas y solicitudes. ¡Envíanos un mensaje o visítanos en
                                nuestras oficinas!
                            </p>
                            <p className="mt-3"><em>Aceptamos pagos con tarjetas de crédito y débito.</em></p>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white animate-fade-in-up">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" id="name" className="form-control" placeholder="Tu nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input type="email" id="email" className="form-control" placeholder="Tu correo" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea id="message" className="form-control" rows="4" placeholder="Tu mensaje"></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger w-100">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}