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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Veniam tempora facere odit temporibus, iste vero fuga nemo 
                                officiis repudiandae, sunt recusandae culpa eum in quos non 
                                architecto corporis. Sint asperiores fugiat iste rem quae cum 
                                aliquid consequuntur animi vitae repellat necessitatibus assumenda,
                                voluptatem vero distinctio nesciunt ad soluta labore nostrum non ullam 
                                repellendus tenetur. Culpa illo minima dolorum laudantium aliquam, laborum 
                                consequatur quisquam fugiat illum assumenda impedit beatae nam tempora 
                                accusantium ipsa error vel dolores voluptates ratione doloremque 
                                porro ipsum odio quia reprehenderit! Iusto ipsa, libero blanditiis 
                                incidunt, vero, quisquam dolore ad soluta totam odit magnam? Iste
                                exercitationem quibusdam ipsa.
                            </p>
                            <a href="#" className="btn btn-primary mt-3">Conoce nuestro servicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}