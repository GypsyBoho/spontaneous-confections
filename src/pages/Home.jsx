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
                <p className='promo'>Happy 2024. <br /> Let us elevate your occasion with our irresistible creations!</p>

                {/* Message */}
                {/*<p className='message'>
                    <a
                        className='address'
                        href=""
                        target='_blankl'>
                        Santa Cruz Mountain Brewing
                    </a><br />
                    December 17th <br />
                    1pm - 5pm
                </p>*/}

                {/* Linked Button */}
                <button>
                    {/* <a href="" target='_blank'>MORE INFO</a> */}

                    {/* Link to Contact Form */}
                    {<ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}>
                        CONTACT US
                    </ScrollLink>}
                </button>
                </section>
            </div>
        </section>
    )
}