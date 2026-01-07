import React, { useEffect, useState } from 'react';

export default function Hero() {
    // Estilo dinámico para el background

    const heroStyle = {
        backgroundImage: "url('../Landing/PEMEX.jpg')", 
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed"
    };

    return (
        <section id="hero" style={heroStyle} className="hero position-relative d-flex align-items-center justify-content-center text-center">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="display-5 fw-bold mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cupiditate, blanditiis quas excepturi temporibus adipisci, tempora natus voluptates delectus dicta assumenda nam repellendus recusandae id eum eos? Laboriosam, labore earum.
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