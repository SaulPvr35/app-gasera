import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar({ openOrderModal }) {
    // Se inicia con el usuario autenticado 
    const { auth } = usePage().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header id="header-principal">
            <nav id="navbar" className="navbar navbar-expand-lg bg-white shadow-sm">
                <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <Link className="navbar-brand d-flex align-items-center me-3 px-2 py-2" href="/">
                        <img src="/Landing/logo.png" alt="Logo Abimerhi" className="logo-img-small me-2" />
                    </Link>

                    {/* Hamburger Button */}
                    <button 
                        className="navbar-toggler border-0 p-0" 
                        type="button" 
                        onClick={toggleMenu}
                    >
                        <div className="hamburger-icon">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </button>

                    {/* Menu */}
                    <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul id="menu-principal" className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                            <li className="nav-item mx-2"><Link className="nav-link px-3 py-2" href="/">Inicio</Link></li>
                            <li className="nav-item mx-2"><a className="nav-link px-3 py-2" href="#sobre-nosotros">Nosotros</a></li>
                            <li className="nav-item mx-2"><a className="nav-link px-3 py-2" href="#servicios">Servicio</a></li>
                            <li className="nav-item mx-2"><a className="nav-link px-3 py-2" href="#contacto">Contacto</a></li>
                            <li className="nav-item mx-2"><Link className="nav-link px-3 py-2" href="#">Tickets</Link></li>
                            
                            {/* Botón Pide tu Gas */}
                            <li className="nav-item mx-2">
                                {auth.user ? (
                                    <button 
                                        className="btn btn-danger btn-pill px-4 py-2 shadow-sm"
                                        onClick={(e) => { e.preventDefault(); openOrderModal(); }}
                                    >
                                        Pide tu Gas L.P.
                                    </button>
                                ) : (
                                    <Link className="btn btn-danger btn-pill px-4 py-2 shadow-sm" href="#">
                                        Pide tu Gas L.P.
                                    </Link>
                                )}
                            </li>

                            {/* Logout */}
                            {auth.user && (
                                <li className="nav-item mx-2">
                                    <Link 
                                        href="#" 
                                        method="post" 
                                        as="button" 
                                        className="btn btn-outline-danger btn-pill px-4 py-2 shadow-sm d-flex align-items-center"
                                    >
                                        <i className="fa fa-sign-out-alt me-2"></i> Cerrar Sesión
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}