import { useEffect, useRef, useState } from 'react';
import './components_css/navbar.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownCompanyRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // -->
    useEffect(() => {
        let outsideClosingFloatMenu = (event) => {
            if (dropdownCompanyRef.current || !dropdownCompanyRef.current.contains(event.target)) setShowDropdown(false);
        };
        document.addEventListener('mousedown', outsideClosingFloatMenu);

        return () => { document.removeEventListener('mousedown', outsideClosingFloatMenu); };
    }, []);

    // Render
    return (
        <>
            <Sidebar visible={visible} onHide={() => setVisible(false)} style={{zIndex: 999999}}>
                <h2>Menu</h2>
                <div className="sidebar-wrapper-links">
                    <li><a href="/us" className="navbar-link-sd" > Quem somos </a></li>
                    <li><a href="/schools" className="navbar-link-sd"> Parcerias escolares </a></li>
                    <li><a href="/where-are-we" className="navbar-link-sd"> Onde estamos </a></li>
                    <li><a href="/blog" className="navbar-link-sd"> BLOG </a></li>
                    <li><a href="/where-are-we" className="navbar-link-sd"> ONDE ENCONTRAR </a></li>
                    <li><a href="/reseller" className="navbar-link-sd"> VENDA EM SUA LOJA </a></li>
                    <li><a href="/contact" className="navbar-link-sd"> CONTATO </a></li>
                </div>
                
            </Sidebar>

            <header className="navbar">
                <div className="mobile-sandwich-bar">
                    <Button icon="pi pi-bars" onClick={() => setVisible(true)} style={{border: '1px solid transparent', backgroundColor: 'transparent'}}/>
                </div>

                <a href="/" title='AICE BRASIL!'><img src="/imgs/logo.png" alt="" /></a>
                
                <nav className='navbar-group'>
                    <ul className="centered-navbar">
                        <div className='navbar-aice-dd' ref={dropdownCompanyRef}>
                            <button className="dropdown-btnlink" onClick={() => { setShowDropdown(prev => !prev); }}>A EMPRESA ▾</button>

                            {(showDropdown) && (
                                <div id="myDropdown" class="dropdown-content">
                                    <li><a href="/us" className="navbar-link-dd" onClick={() => setShowDropdown(false)}> Quem somos </a></li>
                                    <li><a href="/schools" className="navbar-link-dd" onClick={() => setShowDropdown(false)}> Parcerias escolares </a></li>
                                    <li><a href="/where-are-we" className="navbar-link-dd" onClick={() => setShowDropdown(false)}> Onde estamos </a></li>
                                </div>
                            )}
                        </div> 
                        <li><a href="/blog" className="navbar-link"> BLOG </a></li>
                        <li><a href="/where-are-we" className="navbar-link"> ONDE ENCONTRAR </a></li>
                        <li><a href="/reseller" className="navbar-link"> VENDA EM SUA LOJA </a></li>
                        <li><a href="/contact" className="navbar-link"> CONTATO </a></li>
                    </ul>
                </nav>

                <div className="icons">
                    <i className='pi pi-instagram'></i>
                    <i className='pi pi-facebook'></i>
                </div>
            </header>
        </>
    )
}

export default NavBar;