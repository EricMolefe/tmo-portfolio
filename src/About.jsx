import styles from './styles/About.module.css'
import aboutPic from './assets/pic2.jpg'

function About() {
    return(
        <section id="About" className={styles["about-section"]}>
            
            <div className="section-header">
                <h1 className="section-title">About Me</h1>
                <div className="underline"></div>
            </div>

            <div className={styles["about-container"]}>
                <div className={`${styles["about-details"]} ${styles.top}`}>
                    <div className={styles["about-card"]}>
                        <div className="section-subheader">
                            <h4 className="section-subtitle">My Story</h4>
                            <div className="underline"></div>
                        </div>
                        <div className={styles['about-message']}>
                            <p> My journey into tech and design started with a simple curiosity about how things work.
                            Over time, that curiosity grew into a genuine interest in both the technical side of coding 
                            and the creative freedom of art. I’ve always enjoyed learning new things, and working in both areas 
                            allows me to keep exploring and growing.
                            </p>
                            <p> I’m especially drawn to the space where technology and creativity meet. I believe that thoughtful, 
                                well-designed solutions come from balancing functionality with a human touch. Whether I’m writing code 
                                or sketching out an idea, I try to approach every project with care and attention to detail.
                            </p>
                            <p> My focus is on building clean, efficient, and user-friendly applications — while also finding ways to make 
                                them feel personal and engaging. I'm still learning every day, and I see each new project as an opportunity
                                to <b><i>learn, grow and push boundaries</i></b>.
                            </p>
                            <p> When I’m not coding, I enjoy experimenting with different art mediums, which helps keep me inspired and 
                                open to new perspectives.
                            </p>
                        </div>
                    </div>
                    <div className={styles['img-wrapper']}>
                        <img className={styles['about-img']} src={aboutPic} alt="About picture"/>
                    </div>
                </div>
                <div className={`${styles["about-details"]} ${styles.bottom}`}>
                    <div className={`${styles["about-card"]} ${styles.skills}`}>
                        <div className="section-subheader">
                            <h4 className="section-subtitle">Programming Languages</h4>
                            <div className="underline"></div>
                        </div>
                        <ul className={styles['skills-list']}>
                            <li className={styles['skills-item']}>
                                Java</li>
                            <li className={styles['skills-item']}>
                                Python</li>
                            <li className={styles['skills-item']}>
                                JavaScript</li>
                            <li className={styles['skills-item']}>
                                C++</li>
                            <li className={styles['skills-item']}>
                                C#</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>        
    )
} export default About