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
                <p className='promo'>Let us elevate your occasion with our irresistible creations. Get in touch to discover our current offerings or take a look at our menu</p>
                <br />
                {/* Linked Button */}
                <button>
                    {/* <a href="" target='_blank'>CONTACT US</a> */}

                    {/* Link to Contact Form */}
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}>
                        CONTACT US
                    </ScrollLink>
                </button>
            </div>
        </section>
    )
}