import styles from './styles/About.module.css'
import sectionpic from './assets/pic2.jpeg'

function About() {
    return(
        <section id="About" className={styles['about-section']}>
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <div className="underline"/>
            </div>
            <div className={styles.about}>
                <div className={styles['about-left']}>
                    <div className={styles['about-card']}>
                        <h4 className={styles['about-card-title']}>Experience</h4>
                        <div className={styles['about-underline']}/>
                        <div className={styles['about-card-desc']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, excepturi 
                                officia fugiat, animi ipsam natus, debitis dicta tempore laboriosam itaque 
                                iusto obcaecati maiores ut nesciunt! Velit, alias assumenda quaerat excepturi 
                                et, vitae voluptates perspiciatis fugit nostrum odio, reprehenderit iusto 
                                nesciunt?</p>
                        </div>
                    </div>
                    <div className={styles['about-card']}>
                        <h4 className={styles['about-card-title']}>Education</h4>
                        <div className={styles['about-underline']}/>
                        <div className={styles['about-card-desc']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, excepturi 
                                officia fugiat, animi ipsam natus, debitis dicta tempore laboriosam itaque 
                                iusto obcaecati maiores ut nesciunt! Velit, alias assumenda quaerat excepturi 
                                et, vitae voluptates perspiciatis fugit nostrum odio, reprehenderit iusto 
                                nesciunt?</p>
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