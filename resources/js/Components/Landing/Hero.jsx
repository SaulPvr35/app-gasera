import React, { useEffect, useState } from 'react';

export default function Hero() {
    // Estilo dinámico para el background
    const heroStyle = {
        background: "url('/storage/Landing/logo.png') no-repeat center/cover",
        backgroundSize: "cover"
    };

    return (
        <section id="hero" className="hero position-relative d-flex align-items-center justify-content-center text-center text-black" style={heroStyle}>
            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

            <div className="hero-content position-relative px-3 animate-fade-in">
                <h1 className="display-5 fw-bold mb-3">
                    Somos el proveedor número uno de gas L.P. para tanques estacionarios en la Península de Yucatán.
                </h1>
                <p className="lead mb-4">📞 <strong>9999999999</strong></p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="tel:+529999999999" className="btn btn-danger btn-lg rounded-pill d-flex align-items-center gap-2 shadow-sm">
                        <i className="fas fa-phone-alt"></i> Llamar
                    </a>
                    <a href="https://wa.me/529999999999?text=Hola..." target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg rounded-pill d-flex align-items-center gap-2 shadow-sm">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="#contacto" className="btn btn-outline-light btn-lg rounded-pill d-flex align-items-center gap-2 shadow-sm">
                        <i className="fas fa-envelope"></i> Contáctanos
                    </a>
                </div>
            </div>
        </section>
    );
}