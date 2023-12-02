//----- IMPORTS -----//

//Components
import ContactForm from '../components/ContactForm';

//CSS
import '../assets/css/Contact.css';

//Images
// import star from '../assets/images/star.png';
// import header from '../assets/images/header.png';

//----- EXPORTS -----//
export default function Contact() {

    //Return
    return (
        <section>
            <div>
                <h2>EXPERIENCE SWEETNESS LIKE NEVER BEFORE</h2>
                <p>Whether you're ready to order, have
                    questions or simply want to talk, we are
                    always available to assist you.</p>
            </div>
            <aside>
                <ContactForm />
            </aside>
        </section>
    )
}