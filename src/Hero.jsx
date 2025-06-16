import styles from "./styles/Hero.module.css"
import profilepic from './assets/ProfilePic.jpeg'

function Hero() {
    return(
        <section id="Home" className={styles['home-section']}>
            <div className={styles.hero}>
                <div className={styles['pic-container']}>
                    <img className={styles['profile-pic']} src={profilepic} alt="Profile Picture"/>
                </div>
                <div className={styles.biography}>
                    <div className={styles['biography-details']}>
                        <h2 className={styles['section-title']}>TUMELO MOLEFE</h2>
                        <h4 className={styles['biography-titile']}>Software Developer</h4>
                        <p className={styles['biography-desc']}> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis 
                            facilis delectus alias itaque error temporibus neque ipsum saepe esse, 
                            ratione cumque. Eos facere aliquam sit tenetur eveniet optio nulla? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio 
                            inventore sapiente numquam facere cumque.</p>
                    </div>
                    <ul className={styles.socials}>
                        <li><a href="https://github.com/EricMolefe" target="_blank">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/tumelomolefe" target="_blank">Linkedin</a></li>
                        <li><a href="https://https://tryhackme.com/p/KratosV" target="_blank">TryHackMe</a></li>
                        <li><a href="https://www.youtube.com/@TMOFlow" target="_blank">Youtube</a></li>
                    </ul>
                    <div className={styles['cv-button']}>Download CV</div>
                </div>
            </div>
        </section>
    )
} export default Hero