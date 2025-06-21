import styles from './styles/Contact.module.css'

function Contact() {
    return(
        <section id="Contact" className={styles["contact-section"]}>
            <div className="section-header">
                <h1 className="section-title">Contact Me</h1>
                <div className="underline"></div>
            </div>
            <div className={styles['contact-container']}>
                <div className={styles['contact-details']}>
                    <div className={styles['contact-message']}>
                        <p>I am always interested in discussing new opportunities, innovative projects, 
                            and collaborations in Software Development and cybersecurity.</p>
                    </div>
                    {/* <div className={styles['contact-info']}>
                        <p><a href="mailto:molefejrtumelo@gmail.com">Email: molefejrtumelo@gmail.com</a></p>
                        <p>Phone: +266 53939688</p>
                    </div> */}
                </div>
                <form action="https://formspree.io/f/xyzjdoyq" method="POST" className={styles['contact-form']}>
                    <div className={styles['form-field']}>
                        <label htmlFor="name" className="section-subtitle">
                            Name</label>
                        <input type="text" name="firstname" 
                            placeholder="Dwight" 
                            required autoComplete='off'/>
                    </div>
                    <div className={styles['form-field']}>
                        <label htmlFor="name" className="section-subtitle">
                            Surname</label>
                        <input type="text" name="surname" 
                            placeholder="Schrute" required autoComplete='off'/>
                    </div>
                    <div className={styles['form-field']}>
                        <label htmlFor="email" className="section-subtitle">
                            Email Address</label>
                        <input type="text" name="email" 
                            placeholder="dwight.schrute@example.com" 
                                autoComplete='off' required/>
                    </div>
                    <div className={styles['form-field']}>
                        <label htmlFor="message" className="section-subtitle">
                            Message</label>
                        <div className={styles['textarea']}>
                            <textarea name="message" id="message" 
                                placeholder="Type your message" 
                                autoComplete='off' required>
                            </textarea>
                        </div>
                    </div>
                    <button type="Submit">Send Message</button>
                </form>
            </div>
        </section>
    )
} export default Contact