//----- IMPORTS -----//

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

            <div>
                {/*--- FIRST NAME ---*/}
                <label
                    for="first-name">First Name
                </label>
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    required=""
                />
                {/*--- LAST NAME ---*/}
                <label
                    for="last-name">Last Name
                </label>
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    required=""
                />
            </div>

            <div>
                {/*--- EMAIL ---*/}
                <label
                    for="email-address">Email Address
                </label>
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
                <label
                    for="event-date">Event Date
                </label>
                <input
                    type="date"
                    name="event-date"
                    id="event-date"
                    placeholder="Event Date"
                    required=""
                />
            </div>

            <div>
                {/*--- MESSAGE ---*/}
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            {/*--- SUBMIT ---*/}
            <button
                type="submit"
                disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}