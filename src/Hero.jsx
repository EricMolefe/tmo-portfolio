import styles from './styles/Hero.module.css'
import profilePic from './assets/pic1-cropped.jpg'

function Hero() {
    return (
        <section className={styles['hero-section']}>
            <img className={styles['profile-img']} src={profilePic} alt="Profile Picture"/>
            <div className={styles['profile']}>
                <h1 className={styles['profile-title']}>Tumelo Molefe</h1>
                <h4 className={styles['profile-subtitle']}>Software Engineer</h4>
                <p className={styles['profile-message']}>Bridging the gap between technology and creativity. I craft 
                    digital experiences with code and bring imagination to life 
                    through art.<br/>Welcome to my creative universe.</p>
                
                <ul className={styles['profile-socials']}>
                    <li className={styles['social-link']}><a 
                        href="https://github.com/EricMolefe"
                        target="_blank">
                        Github</a></li>
                    <li className={styles['social-link']}><a 
                        href="https://linkedin.com/in/tumelomolefe"
                        target="_blank">
                        Linkedin</a></li>
                    <li className={styles['social-link']}><a href="https://www.youtube.com/@tmoCraft"
                        target="_blank">
                        Youtube</a></li>
                    <li className={styles['social-link']}> <a href="https://github.com/EricMolefe"
                        target="_blank">
                        TryHackMe</a></li>
                </ul>
            </div>
        </section>
    )
} export default Hero