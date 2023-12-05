//----- IMPORTS -----//

//CSS
import '../assets/css/ContactForm.css';

//React
import { useForm, ValidationError } from '@formspree/react';

//----- EXPORTS -----//
export default function ContactForm() {

    const [state, handleSubmit] = useForm("xzbllyjo");
    if (state.succeeded) {
        return <p>Thanks for reaching out! We will be in touch soon 😊</p>;
    }

    //Return
    return (
        <form className='contact-form' onSubmit={handleSubmit}>

            <div className='full-name'>
                {/*--- FIRST NAME ---*/}
                {/* <label
                    for="first-name">First Name
                </label> */}
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    required=""
                />
                {/*--- LAST NAME ---*/}
                {/* <label
                    for="last-name">Last Name
                </label> */}
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    required=""
                />
            </div>

            <div className='email-date'>
                {/*--- EMAIL ---*/}
                {/* <label
                    for="email-address">Email Address
                </label> */}
                <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    placeholder="email@email.com"
                    required=""
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                {/*--- EVENT DATE ---*/}
                {/* <label
                    for="event-date">Event Date
                </label> */}
                <input
                    type="date"
                    name="event-date"
                    id="event-date"
                    placeholder="Event Date"
                    required=""
                />
            </div>

            <div className='input-message'>
                {/*--- MESSAGE ---*/}
                <textarea
                    id="message"
                    name="message"
                    placeholder="Let's get this conversation started!"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            {/*--- SUBMIT ---*/}
            <div className='form-button-container'>
                <button
                    className='form-button'
                    type="submit"
                    disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
    )
}