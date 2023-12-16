//----- IMPORTS -----//

//Components
import ContactForm from '../components/ContactForm';

//CSS
import '../assets/css/Contact.css';

//----- EXPORTS -----//
export default function Contact() {

    //Return
    return (
        <section className='contact'>

            {/* Contact Message */}
            <article className='contact-message'>
                <h2>
                    EXPERIENCE <br />
                    SWEETNESS LIKE <br />
                    NEVER BEFORE</h2>
                <p>
                    Whether you're ready to order, have
                    questions or simply want to talk, we are
                    always available to assist you.
                </p>
            </article>

            {/* Contact Form */}
            <aside className='form-container'>
                <ContactForm />
            </aside>
        </section>
    )
}