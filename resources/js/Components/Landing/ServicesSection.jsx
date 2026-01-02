import React from 'react';

export default function ServicesSection() {
    return (
        <section id="servicios" className="section section--services py-5 bg-light">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Imagen a la derecha en escritorio */}
                    <div className="col-md-6 order-md-2">
                        <div className="img-wrapper shadow-sm">
                            <img
                                src="/storage/Landing/servicio.png"
                                alt="Servicio de Gas LP"
                                className="img-fluid rounded img-bordered"
                            />
                        </div>
                    </div>
                    {/* Texto a la izquierda */}
                    <div className="col-md-6 order-md-1">
                        <div className="content-wrapper p-4 rounded shadow-sm bg-white animate-slide-in-left">
                            <h2 className="section-title mb-3">
                                Ofrecemos un servicio que soluciona tus necesidades
                            </h2>
                            <p>
                                Nos enfocamos en brindar un servicio de la más alta calidad que cumple con tus
                                expectativas. Nuestro equipo capacitado y compromiso con la mejora continua nos permite
                                responder de forma inmediata a tus requerimientos.
                            </p>
                            <a href="#" className="btn btn-primary mt-3">Conoce nuestro servicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}