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
                <p className='promo'>See you at the <br /> 11th Annual <br /> Winter Art Market!</p>

                {/* Message */}
                <p className='message'>
                    <a
                        className='address'
                        href="https://www.google.com/maps/place/Tannery+Arts+Center/@36.9883371,-122.0324681,17z/data=!3m1!4b1!4m6!3m5!1s0x808e4037ac96439d:0x95cefaf6f1f4e06a!8m2!3d36.9883371!4d-122.0298932!16s%2Fg%2F11b88g_0_d?entry=ttu"
                        target='_blankl'>
                        Tannery Arts Center
                    </a><br />
                    December 9th <br />
                    10am - 5pm
                </p>

                {/* Linked Button */}
                <button>
                    <a href="https://www.tanneryartscenter.org/winter-art-market-23" target='_blank'>MORE INFO</a>

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