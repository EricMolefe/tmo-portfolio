import styles from './styles/Skills.module.css'
<<<<<<< HEAD
import sectionpic from './assets/pic2.jpeg'

function Skills() {
    return(
        <section id="Skills" className={styles['skills-section']}>
            <div className="section-header">
                <h2 className="section-title">Technical Skills</h2>
                <div className="underline"/>
            </div>
            <div className={styles.skills}>
                
=======

function Skills() {
    return(
        <section className={styles['skills-section']}>
            <div className={styles['section-header']}>
                <h1 className={styles['section-title']}>Skills</h1>
                <div className={styles['underline']}></div>
            </div>
            <div className={styles['skills-container']}>
                
                <div className={styles['skills-card']}>
                    <div className={styles['section-subheader']}>
                        <h3 className={styles['section-subtitle']}>Artificial Intelligence & Data Science</h3>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles['skills-list']}>
                        <p className={styles['skills-item']}>
                            <b>Machine Learning: </b>
                                Python-based ML fundamentals using Numpy, Pandas, and scikit-learn
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Areas of Interest: </b>
                                Neural Networks, Data Visualization, Prompt Engineering 
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Development Philosophy: </b>
                            </p>
                    </div>
                </div>
                
                <div className={styles['skills-card']}>
                    <div className={styles['section-subheader']}>
                        <h3 className={styles['section-subtitle']}>Cybersecurity & Network Security</h3>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles['skills-list']}>
                        <p className={styles['skills-item']}>
                            <b>Security Analysis: </b>
                                Threat Detection, 
                                Malware Analysis
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Network Security: </b>
                                Traffic Analysis With Wireshark,
                                Network Monitoring, 
                                System Hardening
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Platforms and Tools: </b>
                                 TryHackMe,
                                 Virtualization Tools, 
                                 Nagios Monitoring Tool
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Core Competencies: </b>
                                Active Directory, Log Analysis, Secure Coding Practices
                            </p>
                        {/* <p className={styles['skills-item']}>
                            <b>Specialized Projects: </b>
                                Windows, Linux (Arch, Kali, Ubuntu)
                            </p> */}
                    </div>
                </div>
>>>>>>> rebuild
            </div>
        </section>
    )
} export default Skills