import styles from './styles/Header.module.css';

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-container']}>
        <h4 className={styles.logo}><b>tmo</b></h4>
        <ul className={styles['nav-links']}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
