import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    // Estado para abrir/cerrar el menú en celular
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header id="header-principal">
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid px-4 py-2">
                    
                    {/* === LOGO (Izquierda) === */}
                    <Link className="d-flex align-items-center me-3" href="/">
                        <img src="/Landing/logo.png" alt="Logo" className="logo-img-small" />
                    </Link>

                    <div id="navbarNav">
                        <ul className="navbar-nav align-items-center text-center">
                            
                            <li className="nav-item mx-2">
                                <Link className="nav-link" href="/">Inicio</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#sobre-nosotros">Nosotros</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#servicios">Servicio</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" href="#">Tickets</Link>
                            </li>
                            <li>
                                <button className='btn-pill'>Pedir Gas</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}