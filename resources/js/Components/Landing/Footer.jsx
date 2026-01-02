import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer-principal" className="py-4 bg-light text-center">
            <div className="container">
                <p className="mb-1">&copy; {year} Gasera. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}