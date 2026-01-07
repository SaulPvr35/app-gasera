import React from 'react';

export default function AboutSection() {
    return (
        <section id="sobre-nosotros" className="section section--about py-5">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Imagen representativa */}
                    <div className="col-md-6">
                        <div className="img-wrapper shadow-sm">
                            <img
                                src="/storage/Landing/nosotros.png"
                                alt="Camiones de Gas"
                                className="img-fluid rounded img-bordered"
                            />
                        </div>
                    </div>
                    {/* Texto de la sección */}
                    <div className="col-md-6">
                        <div className="content-wrapper p-4 rounded shadow-sm bg-white animate-slide-in-right">
                            <h2 className="section-title mb-3">Un poco de nosotros</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Voluptates rem illum molestiae blanditiis animi accusamus quos, 
                                ipsa accusantium at quisquam reprehenderit consectetur architecto 
                                aut maxime labore veniam necessitatibus ducimus quibusdam?
                            </p>
                            <a href="#" className="btn btn-outline-primary mt-3">Conócenos mejor</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}