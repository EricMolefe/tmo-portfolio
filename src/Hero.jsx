import styles from './styles/Hero.module.css'
import profilePic from './assets/pic1-cropped.jpg'

function Hero() {
    return (
        <section className={styles['hero-section']}>
            <div className={styles['hero-container']}>
                <img className={styles['profile-img']} src={profilePic} alt="Profile Picture"/>
                <div className={styles['profile']}>
                    <h1 className={styles['profile-title']}>Tumelo Molefe</h1>
                    <h4 className={styles['profile-subtitle']}>Software Engineer</h4>
                    <div className={styles['profile-message']}>
                        <p>Bridging the gap between technology and creativity. I craft 
                            digital experiences with code and bring imagination to life 
                            through art.</p>
                        <p>
                            <em>Welcome to my creative universe.</em></p>
                    </div>
                    
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
                    <div className={styles['profile-buttons']}>
                        <div className={styles['cv-button']}>Download CV</div>
                        <div className={styles['projects-button']}>See projects</div>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Hero