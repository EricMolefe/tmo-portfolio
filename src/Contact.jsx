import styles from "./styles/Contact.module.css"

function Contact() {
    return(
        <section id="Contact">
            <div className="section-header">
                <h2 className="section-title">Contact Me</h2>
                <div className="underline"/>
            </div>
            <div className={styles.contact}>
                <h2 class="section-title scroll-reveal">Let's Connect</h2>
                <p class="scroll-reveal">I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI and cybersecurity.</p>
            </div>
            <div class="contact-content">
            <div class="contact-info scroll-reveal">
                <div class="contact-item">
                    <strong>GitHub: </strong>
                    <span>github.com/ericmolefe</span>
                </div>
                <div class="contact-item">
                    <strong>Email: </strong>
                    <span>molefejrtumelo@gmail.com</span>
                </div>
                <div class="contact-item">
                    <strong>LinkedIn: </strong>
                    <span>linkedin.com/in/tumelomolefe</span>
                </div>
                
            </div>
        </div>
        </section>
    )
} export default Contact