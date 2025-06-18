import styles from "./styles/Contact.module.css"

function Contact() {
    return(
        <section id="Contact" className={['contact-section']}>
            <div className="section-header">
                <h2 className="section-title">Contact Me</h2>
                <div className="underline"/>
            </div>
            <div className={styles.contact}>
                <div className={styles['contact-details']}>
                    <p class="scroll-reveal">I'm always interested in discussing new opportunities, 
                        innovative projects, and collaborations in AI and cybersecurity.</p>
                    <p className={styles['contact-info']}>Email: molefejrtumelo@gmail.com</p>
                    <p className={styles['contact-info']}>Phone: +266 5393 9688</p>
                </div>
                <div className={styles['contact-form']}>
                    <div className={styles['contact-field']}>
                        <label htmlFor="name"><h4>Your Name</h4></label>
                        <input type="text" name="fullname" placeholder="Dwight Schrute"/>  
                    </div>
                    <div className={styles['contact-field']}>
                        <label htmlFor="email"><h4>Your Email Address</h4></label>
                        <input type="text" name="email" placeholder="dwight.schrute@example.com"/>
                    </div>
                    <div className={styles['contact-field']}>
                        <label htmlFor="message"><h4>Your Message</h4></label>
                        <input type="area" name="message" placeholder="Type in your message"/>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Contact