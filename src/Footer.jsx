import styles from './styles/Footer.module.css'
<<<<<<< HEAD

function Footer() {
    return(
        <footer>
            <div className={styles.copywrite}>
                <p>&copy; {new Date().getFullYear()} Tumelo Molefe</p>
                <p>Designed with passion by Tumelo E. Molefe</p>
=======
function Footer() {
    return(
        <footer className={styles['footer-section']}>
            <div className={styles['footer-info']}>
                <p> &copy; {new Date().getFullYear()} Tumelo Molefe </p>
                <p> Designed with passion by Tumelo E. Molefe </p>
>>>>>>> rebuild
            </div>
        </footer>
    )
} export default Footer