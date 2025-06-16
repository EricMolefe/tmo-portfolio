import styles from "./styles/Projects.module.css"
import project1IMG from "./assets/project1.png"

function Projects() {
    return(
        <section id="Projects" className={styles['projects-section']}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <div className="underline"/>
            </div>
            <div className={styles.projects}>
            <div className={styles['project-card']}>
                    <div className={styles['project-img-container']}>
                        <img className={styles['project-img']} src={project1IMG} alt="TMO Portfolio"/>
                    </div>
                    <div className={styles['project-details']}>
                        <h4 className={styles['project-title']}>TMO Portfolio</h4>
                        <div className={styles['project-desc']}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quidem veritatis a vitae excepturi nihil optio, aliquid 
                                similique culpa debitis tempora.</p>
                        </div>
                        <div className={styles['project-techStack']}>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['project-card']}>
                    <div className={styles['project-img-container']}>
                        <img className={styles['project-img']} src={project1IMG} alt="TMO Portfolio"/>
                    </div>
                    <div className={styles['project-details']}>
                        <h4 className={styles['project-title']}>TMO Portfolio</h4>
                        <div className={styles['project-desc']}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quidem veritatis a vitae excepturi nihil optio, aliquid 
                                similique culpa debitis tempora.</p>
                        </div>
                        <div className={styles['project-techStack']}>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['project-card']}>
                    <div className={styles['project-img-container']}>
                        <img className={styles['project-img']} src={project1IMG} alt="TMO Portfolio"/>
                    </div>
                    <div className={styles['project-details']}>
                        <h4 className={styles['project-title']}>TMO Portfolio</h4>
                        <div className={styles['project-desc']}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quidem veritatis a vitae excepturi nihil optio, aliquid 
                                similique culpa debitis tempora.</p>
                        </div>
                        <div className={styles['project-techStack']}>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Projects