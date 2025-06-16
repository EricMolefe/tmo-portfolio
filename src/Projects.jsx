import styles from "./styles/Projects.module.css"

function Projects() {
    return(
        <section id="Projects" className={styles['projects-section']}>
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <div className="underline"/>
            </div>
            <div className={styles.projects}>
                <div className={styles['project-card']}>
                </div>
                <div className={styles['project-card']}> 
                </div>
                <div className={styles['project-card']}> 
                </div>
            </div>
        </section>
    )
} export default Projects