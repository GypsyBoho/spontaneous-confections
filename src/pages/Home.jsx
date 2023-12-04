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
            <div className='box'>
                <p className='promo'>Indulge in Festive Treats for Your Holiday Gatherings!</p>
                <p className='message'>Secure your sweet moments with us today.</p>
                <button>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        CONTACT US
                    </ScrollLink>
                </button>
            </div>
        </section>
    )
}