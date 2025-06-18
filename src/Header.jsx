import styles from './styles/Header.module.css'

function Header() {
    return (
        <nav>
            <h4 className={styles.logo}>tmo</h4>
            
            <ul className={styles['nav-links']}>
                <li className={styles['nav-item']}><a href="#Home">Home</a></li>
                <li className={styles['nav-item']}><a href="#About">About</a></li>
                <li className={styles['nav-item']}><a href="#Skills">Skills</a></li>
                <li className={styles['nav-item']}><a href="#Projects">Projects</a></li>
                <li className={styles['nav-item']}><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
} export default Header