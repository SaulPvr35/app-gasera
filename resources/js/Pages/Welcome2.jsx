import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

//----------------- COMPONENTES ----------------
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import Footer from '@/Components/Landing/Footer';
import AboutSection from '@/Components/Landing/AboutSection';
import ServicesSection from '@/Components/Landing/ServicesSection';
import ContactSection from '@/Components/Landing/ContactSection';

// ---------------------- MODALS -------------------
import OrderGasModal from '@/Components/Modals/OrdenGasModal';
import SuccessModal from '@/Components/Modals/SuccessModal';

//----------------- COMPONENTES ----------------
// --- ESTILOS ---
import '../../css/welcome.css';


export default function Welcome2() {
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Lógica para detectar retorno de Stripe (?pagado=1)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('pagado') === '1') {
            setShowSuccessModal(true);
            // Limpiar URL sin recargar la página
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <>
            {/* Título de la pestaña del navegador */}
            <Head title="Gasera - Inicio" />

            <div id="app-react">
                {/* Navbar recibe la función para abrir el modal */}
                <Navbar/>    

                <main>
                    <Hero />
                    <AboutSection />
                    <ServicesSection />
                    <ContactSection />
                </main>

                <Footer />

                {/* modal  */}
                <OrderGasModal 
                    show={showOrderModal} 
                    onClose={() => setShowOrderModal(false)}
                    onSuccess={() => setShowSuccessModal(true)}
                />

                {/* Modal de Éxito */}
                <SuccessModal 
                    show={showSuccessModal} 
                    onClose={() => setShowSuccessModal(false)} 
                />
            </div>
        </>
    );
}