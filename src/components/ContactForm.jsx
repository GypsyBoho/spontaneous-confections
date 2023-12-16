//----- IMPORTS -----//

//CSS
import '../assets/css/ContactForm.css';

//React
import { useForm, ValidationError } from '@formspree/react';

//----- EXPORTS -----//
export default function ContactForm() {

    const [state, handleSubmit] = useForm("xknldaqr");
    if (state.succeeded) {
        return <p className='after-submit'>We are hard at work baking and will respond within 2-3 business days.</p>;
    }

    //Return
    return (
        <form className='contact-form' onSubmit={handleSubmit}>

            <div className='full-name'>
                <div>
                    {/*--- FULL NAME ---*/}
                    <label
                        for="full-name">Full Name
                    </label>
                    <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        placeholder="Full Name"
                        required=""
                    />
                </div>

                <div>
                    {/*--- PHONE NUMBER ---*/}
                    <label
                        for="phone-number">Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        placeholder="999-999-9999"
                        required=""
                    />
                </div>
            </div>

            <div className='email-date'>
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
                </div>

                <div>
                    {/*--- EVENT DATE ---*/}
                    <label
                        for="event-date">Delivery Date
                    </label>
                    <input
                        type="date"
                        name="event-date"
                        id="event-date"
                        placeholder="Event Date"
                        required=""
                    />
                </div>
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