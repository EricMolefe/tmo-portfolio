import styles from './styles/Contact.module.css'

function Contact() {
    return(
        <section className={styles["contact-section"]}>
            <div className={styles["section-header"]}>
                <h1 className={styles["section-title"]}>Contact Me</h1>
                <div className={styles["underline"]}></div>
                
                <div className={styles['contact-details']}>
                    <p>
                        I am always interested in discussing new opportunities, innovative projects, 
                        and collaborations in Software Development and cybersecurity.</p>
                    <div className={styles['contact-details']}>
                        <p>Email: molefejrtumelo@gmail.com</p>
                        <p>Phone: +266 53939688</p>
                    </div>

                </div>
                <div className={styles['contact-form']}>
                    <form action="">
                        <div className={styles['form-field']}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" for="name" placeholder="Dwight Schrute"/>
                        </div>
                        <div className={styles['form-field']}>
                            <label htmlFor="email">Email Address</label>
                            <input type="text" for="email" placeholder="dwight.schrute@example.com"/>
                        </div>
                        <div className={styles['form-field']}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Type your message" cols="32">
                            </textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
} export default Contact