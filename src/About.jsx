import styles from './styles/About.module.css'
import sectionpic from './assets/pic2.jpeg'

function About() {
    return(
        <section id="About" className={styles['about-section']}>
            <div className="section-header autoshow">
                <h2 className="section-title">About Me</h2>
                <div className="underline"/>
            </div>
            <div className={styles.about}>
                <div className={styles['about-left']}>
                    <div className={styles['about-card-story']}>
                        <h4 className={styles['about-card-title']}>My Story</h4>
                        <div className={styles['about-underline']}/>
                        <div className={styles['about-details']}>
                            <p> My journey began with curiosity 
                                about how things work, leading me to explore both the technical
                                and artistic sides of creation. When I'm not coding, 
                                you'll find me experimenting with new art mediums.
                                I believe that the intersection of technology and art creates 
                                the most compelling and human-centered solutions. <br/><br/> 
                                My approach combines clean, efficient code with thoughtful 
                                design and a touch of creative flair. Every project is an 
                                opportunity to <i><b>learn, grow, and push boundaries.</b></i> </p>
                        </div>
                    </div>
                    <div className={styles['about-card']}>
                        <h4 className={styles['about-card-title']}>Technical Skills</h4>
                        <div className={styles['about-underline']}/>
                        <div className={styles['about-details']}>
                            <ul>
                                <li className={styles['about-skill']}>Java</li>
                                <li className={styles['about-skill']}>Python</li>
                                <li className={styles['about-skill']}>Rust</li>
                                <li className={styles['about-skill']}>React</li>
                                <li className={styles['about-skill']}>C++</li>
                                <li className={styles['about-skill']}>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['about-right']}>
                    <div className={styles['pic-container']}>
                        <img className={styles['section-pic']} src={sectionpic} alt="Profile Picture"/>
                    </div>
                </div>
            </div>
        </section>
    )
} export default About