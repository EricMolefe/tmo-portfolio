<<<<<<< HEAD
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
=======
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
>>>>>>> rebuild
            </div>
        </section>
    )
} export default Contact