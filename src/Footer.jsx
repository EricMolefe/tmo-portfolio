import styles from './styles/Footer.module.css'
function Footer() {
    return(
        <footer className={styles['footer-section']}>
            <div className={styles['footer-info']}>
                <p> &copy; {new Date().getFullYear()} Tumelo Molefe </p>
                <p> Designed with passion by Tumelo E. Molefe </p>
            </div>
        </footer>
    )
} export default Footer