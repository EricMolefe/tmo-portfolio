import styles from './styles/Projects.module.css'
import projectImg1 from './assets/project1.png'

function Projects() {
    return(
        <section id="Projects" className={styles["project-section"]}>
            <div className={styles["section-header"]}>
                <h1 className={styles["section-title"]}>Projects</h1>
                <div className={styles["underline"]}></div>
            </div>

            <div className={styles['projects-container']}>
                <div className={styles['project-card']}>
                    <div className={styles['project-img']}>
                        <img src={projectImg1} alt="Project 1 image"/>
                    </div>
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
                </div>
                <div className={styles['project-card']}>
                    <div className={styles['project-img']}>
                        <img src={projectImg1} alt="Project 1 image"/>
                    </div>
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
                </div>
                <div className={styles['project-card']}>
                    <div className={styles['project-img']}>
                        <img src={projectImg1} alt="Project 1 image"/>
                    </div>
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
                </div>
            </div>
        </section>
    )
} export default Projects