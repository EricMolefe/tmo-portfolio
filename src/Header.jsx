import { useState } from 'react'
import styles from './styles/Header.module.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { label: 'Home', href: '#Home' },
        { label: 'About', href: '#About' },
        // { label: 'Skills', href: '#Skills' },
        { label: 'Projects', href: '#Projects' },
        { label: 'Contact', href: '#Contact' },
    ]

    return (
        <nav>
            <div className={styles['nav-container']}>
                <h1 className={styles.logo}>tmoCraft.</h1>

                {/* Desktop Menu */}
                <div className={styles['desktop-menu']}>
                    <ul className={styles['nav-links']}>
                        {navLinks.map(link => (
                            <li key={link.label} className={styles['nav-item']}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Button */}
                <div className={`${styles['ham-menu']} ${isOpen ? styles.active : ''}`}
                    onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles['mobile-menu']} ${isOpen ? styles.active : ''}`}>
                    <ul className={styles['nav-links']}>
                        {navLinks.map(link => (
                            <li key={link.label} className={styles['nav-item']}>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
