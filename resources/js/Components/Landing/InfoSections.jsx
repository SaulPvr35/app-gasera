import React from 'react';

export const AboutSection = () => (
    <section id="sobre-nosotros" className="section section--about py-5">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-md-6">
                    <div className="img-wrapper shadow-sm">
                        <img src="/storage/Landing/nosotros.png" alt="Camiones" className="img-fluid rounded img-bordered" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content-wrapper p-4 rounded shadow-sm bg-white">
                        <h2 className="section-title mb-3">Un poco de nosotros</h2>
                        <p>Nuestra misión es proporcionarte todos los servicios necesarios...</p>
                        <a href="#" className="btn btn-outline-primary mt-3">Conócenos mejor</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const ServicesSection = () => (
    <section id="servicios" className="section section--services py-5 bg-light">
        <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-md-6 order-md-2">
                    <div className="img-wrapper shadow-sm">
                        <img src="/storage/Landing/servicio.png" alt="Servicio" className="img-fluid rounded img-bordered" />
                    </div>
                </div>
                <div className="col-md-6 order-md-1">
                    <div className="content-wrapper p-4 rounded shadow-sm bg-white">
                        <h2 className="section-title mb-3">Ofrecemos un servicio que soluciona...</h2>
                        <p>Nos enfocamos en brindar un servicio de la más alta calidad...</p>
                        <a href="#" className="btn btn-primary mt-3">Conoce nuestro servicio</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const ContactSection = () => (
    <section id="contacto" className="section section--contact py-5">
        <div className="container">
            <h2 className="section-title text-center mb-4">Contáctanos</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="contact-card p-4 rounded shadow-sm bg-white">
                        <p><strong>Email:</strong> <a href="mailto:contacto@gasera.com">contacto@gasera.com</a></p>
                        <p><strong>Teléfono:</strong> <a href="tel:+529999429090">(999) 942-9090</a></p>
                        <p>Aceptamos pagos con tarjetas de crédito y débito.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="p-4 rounded shadow-sm bg-white">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" placeholder="Tu correo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" rows="4" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);