import styles from './styles/Skills.module.css'

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
                        <h3 className={styles['section-subtitle']}>Programming & Development</h3>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles['skills-list']}>
                        <p className={styles['skills-item']}>
                            <b>Languages: </b>
                                Java, Python, C++, C#, JavaScript
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Framworks/Libraries: </b>
                                React, Node.js
                            </p>
                        <p className={styles['skills-item']}>
                            <b>Tools & Technologies: </b>
                                Git, Github, Vite
                            </p>
                        <p className={styles['skills-item']}>
                            <b>OS: </b>
                                Windows, Linux (Arch, Kali, Ubuntu)
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
            </div>
        </section>
    )
} export default Skills