'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/components/Header/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';
import headerLogo from "../../../public/images/header-logo.svg";
import { FiUser, FiSearch } from "react-icons/fi";

function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isServiceDetailPage = pathname === '/service-detail' || pathname === '/service-details' || pathname?.startsWith('/service-detail');
    const shouldAddHomeHeaderClass = isHomePage || isServiceDetailPage;

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsNavOpen(false);
                setActiveDropdown(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
    };

    const closeAllMenus = () => {
        setIsNavOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className={`headerWrapper ${shouldAddHomeHeaderClass ? 'homePageHeader home-page-header' : ''}`}>
            <div className="container">
                <nav className={`navbar navbar-expand-md customNavbar ${isNavOpen ? 'menu-open' : ''}`}>
                    <div className="nav-outer">
                        {/* Logo Section */}
                        <Link
                            href="/"
                            className="navbar-brand d-flex align-items-center brandWrapper"
                            onClick={closeAllMenus}
                        >
                            <div className="logoBadge">
                                <Image src={headerLogo} alt="The Bayas Designs" priority />
                            </div>
                        </Link>

                        {/* Mobile Hamburger Button with animated bars */}
                        <button
                            className={`navbar-toggler navToggle ${isNavOpen ? 'active' : ''}`}
                            type="button"
                            aria-label="Toggle navigation"
                            aria-expanded={isNavOpen}
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="hamburgerBar barTop"></span>
                            <span className="hamburgerBar barMiddle"></span>
                            <span className="hamburgerBar barBottom"></span>
                        </button>

                        {/* Collapsible Menu */}
                        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="mainNavbar">
                            <ul className="navbar-nav mx-auto align-items-md-center navLinks">
                                <li className="nav-item">
                                    <Link href="/" className="nav-link linkItem" onClick={closeAllMenus}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about" className="nav-link linkItem" onClick={closeAllMenus}>About</Link>
                                </li>

                                {/* Services Dropdown */}
                                <li
                                    className={`nav-item dropdown customDropdown ${activeDropdown === 'services' ? 'show' : ''}`}
                                    onMouseEnter={() => {
                                        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                            setActiveDropdown('services');
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                            setActiveDropdown(null);
                                        }
                                    }}
                                >
                                    <button
                                        className="nav-link dropdown-toggle linkItem dropdownBtn"
                                        type="button"
                                        onClick={() => toggleDropdown('services')}
                                        aria-expanded={activeDropdown === 'services'}
                                    >
                                        Services
                                    </button>
                                    <ul className={`dropdown-menu customDropdownMenu ${activeDropdown === 'services' ? 'show' : ''}`}>
                                        <li><Link className="dropdown-item customDropdownItem" href="/#services" onClick={closeAllMenus}>All Services</Link></li>
                                        <li><Link className="dropdown-item customDropdownItem" href="/#services" onClick={closeAllMenus}>Architecture Design</Link></li>
                                        <li><Link className="dropdown-item customDropdownItem" href="/#services" onClick={closeAllMenus}>Interior Design</Link></li>
                                        <li><Link className="dropdown-item customDropdownItem" href="/#services" onClick={closeAllMenus}>Construction</Link></li>
                                    </ul>
                                </li>

                                {/* Products Dropdown */}
                                <li
                                    className={`nav-item dropdown customDropdown ${activeDropdown === 'products' ? 'show' : ''}`}
                                    onMouseEnter={() => {
                                        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                            setActiveDropdown('products');
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                            setActiveDropdown(null);
                                        }
                                    }}
                                >
                                    <button
                                        className="nav-link dropdown-toggle linkItem dropdownBtn"
                                        type="button"
                                        onClick={() => toggleDropdown('products')}
                                        aria-expanded={activeDropdown === 'products'}
                                    >
                                        Products
                                    </button>
                                    <ul className={`dropdown-menu customDropdownMenu ${activeDropdown === 'products' ? 'show' : ''}`}>
                                        <li><Link className="dropdown-item customDropdownItem" href="/products" onClick={closeAllMenus}>All Products</Link></li>
                                        <li><Link className="dropdown-item customDropdownItem" href="/products" onClick={closeAllMenus}>Lighting & Decor</Link></li>
                                        <li><Link className="dropdown-item customDropdownItem" href="/product-detail" onClick={closeAllMenus}>Wall Art Lights</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/portfolio" className={`nav-link linkItem ${pathname === '/portfolio' ? 'active' : ''}`} onClick={closeAllMenus}>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/#testimonials" className="nav-link linkItem" onClick={closeAllMenus}>Testimonials</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/#blogs" className="nav-link linkItem" onClick={closeAllMenus}>Blogs</Link>
                                </li>
                            </ul>

                            <div className="search-cont">
                                <span> <FiSearch className="iconStyle" /></span>
                                <span> <FiUser className="iconStyle" /></span>
                            </div>

                            {/* Contact CTA Button */}
                            <div className="ctaContainer">
                                <Link href="#contact" className="contactBtn" onClick={closeAllMenus}>
                                    <span>Contact Us</span>
                                    <span className="arrowIcon">
                                        <RxArrowRight size={18} strokeWidth={.6} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;