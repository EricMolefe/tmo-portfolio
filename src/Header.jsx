import { useState } from 'react'
import HeaderStyles from './styles/Header.module.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { label: 'Home', href: '#Home' },
        { label: 'About', href: '#About' },
        { label: 'Skills', href: '#Skills' },
        { label: 'Projects', href: '#Projects' },
        { label: 'Contact', href: '#Contact' },
    ]

    return (
        <nav>
            <h1 className={HeaderStyles.logo}>tmoCraft.</h1>

            {/* Desktop Menu */}
            <div className={HeaderStyles['desktop-menu']}>
                <ul className={HeaderStyles['nav-links']}>
                    {navLinks.map(link => (
                        <li key={link.label} className={HeaderStyles['nav-item']}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger Button */}
            <div className={`${HeaderStyles['ham-menu']} ${isOpen ? HeaderStyles.active : ''}`}
                onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Menu */}
            <div className={`${HeaderStyles['mobile-menu']} ${isOpen ? HeaderStyles.active : ''}`}>
                <ul className={HeaderStyles['nav-links']}>
                    {navLinks.map(link => (
                        <li key={link.label} className={HeaderStyles['nav-item']}>
                            <a href={link.href} onClick={closeMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header