import styles from './styles/Projects.module.css'
import projectImg1 from './assets/project1.png'

function Projects() {
    return(
        <section id="Projects" className={styles["projects-section"]}>
            <div className="section-header">
                <h1 className="section-title">Projects</h1>
                <div className="underline"></div>
            </div>

            <div className={styles['projects-container']}>
                <div className={styles['project-card']}>
                    <img className={styles['project-img']} src={projectImg1} alt="Project 1 image"/>
                    <div className={styles["project-info"]}>
                        <h4 className={styles["section-subtitle"]}>Project 1</h4>
                        <div className={styles["project-desc"]}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nihil minus dignissimos eum in rerum sed voluptatum possimus 
                                amet molestias recusandae, illum obcaecati officia sequi error.</p>   
                        </div>
                        <ul className={styles["project-techstack"]}>
                            <li className={styles["project-tech"]}>
                                HTML</li>
                            <li className={styles["project-tech"]}>
                                CSS</li>
                            <li className={styles["project-tech"]}>
                                JavaScript</li>
                            <li className={styles["project-tech"]}>
                                React</li>
                        </ul>
                    </div>
                    <ul className={styles["project-links"]}>
                        <li><a className={styles["project-link"]} 
                            href="https://github.com/EricMolefe/tmo-portfolio.git" 
                            target="_blank">
                            Github</a>
                        </li>
                        <li><a className={styles["project-link"]} href="" target="_blank">
                            Live Demo</a>
                        </li>
                    </ul>
                </div>
                <div className={styles['project-card']}>
                    <img className={styles['project-img']} src={projectImg1} alt="Project 2 image"/>
                    <div className={styles["project-info"]}>
                        <h4 className={styles["section-subtitle"]}>Project 2</h4>
                        <div className={styles["project-desc"]}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nihil minus dignissimos eum in rerum sed voluptatum possimus 
                                amet molestias recusandae, illum obcaecati officia sequi error.</p>   
                        </div>
                        <ul className={styles["project-techstack"]}>
                            <li className={styles["project-tech"]}>
                                HTML</li>
                            <li className={styles["project-tech"]}>
                                CSS</li>
                            <li className={styles["project-tech"]}>
                                JavaScript</li>
                            <li className={styles["project-tech"]}>
                                React</li>
                        </ul>
                    </div>
                    <ul className={styles["project-links"]}>
                        <li><a className={styles["project-link"]} 
                            href="https://github.com/EricMolefe/tmo-portfolio.git" 
                            target="_blank">
                            Github</a>
                        </li>
                        <li><a className={styles["project-link"]} href="" target="_blank">
                            Live Demo</a>
                        </li>
                    </ul>
                </div>
                <div className={styles['project-card']}>
                    <img className={styles['project-img']} src={projectImg1} alt="Project 3 image"/>
                    <div className={styles["project-info"]}>
                        <h4 className={styles["section-subtitle"]}>Project 3</h4>
                        <div className={styles["project-desc"]}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nihil minus dignissimos eum in rerum sed voluptatum possimus 
                                amet molestias recusandae, illum obcaecati officia sequi error.</p>   
                        </div>
                        <ul className={styles["project-techstack"]}>
                            <li className={styles["project-tech"]}>
                                HTML</li>
                            <li className={styles["project-tech"]}>
                                CSS</li>
                            <li className={styles["project-tech"]}>
                                JavaScript</li>
                            <li className={styles["project-tech"]}>
                                React</li>
                        </ul>
                    </div>
                    <ul className={styles["project-links"]}>
                        <li><a className={styles["project-link"]} 
                            href="https://github.com/EricMolefe/tmo-portfolio.git" 
                            target="_blank">
                            Github</a>
                        </li>
                        <li><a className={styles["project-link"]} href="" target="_blank">
                            Live Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
} export default Projects