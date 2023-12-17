//----- IMPORTS -----//

//React
import { Link as ScrollLink } from 'react-scroll';

//CSS
import '../assets/css/Home.css';

//----- EXPORTS -----//
export default function Home() {

    //Return
    return (
        <section className='home'>

            {/* White Box */}
            <div className='box'>

                {/* Bolded Message */}
                <p className='promo'>See you at the <br /> Santa Cruz Mountain Brewing!</p>

                {/* Message */}
                <p className='message'>
                    <a
                        className='address'
                        href="https://www.eventbrite.com/e/great-brewery-bake-off-holiday-cookie-competition-tickets-773896644697?aff=ebdssbdestsearch"
                        target='_blankl'>
                        Santa Cruz Mountain Brewing
                    </a><br />
                    December 17th <br />
                    2pm - 4pm
                </p>

                {/* Linked Button */}
                <button>
                    <a href="https://www.eventbrite.com/e/great-brewery-bake-off-holiday-cookie-competition-tickets-773896644697?aff=ebdssbdestsearch" target='_blank'>MORE INFO</a>

                    {/* Link to Contact Form */}
                    {/* <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}>
                        CONTACT US
                    </ScrollLink> */}
                </button>
            </div>
        </section>
    )
}