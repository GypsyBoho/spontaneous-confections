//----- IMPORTS -----//

//CSS
import '../assets/css/Footer.css';

//Images
import cookie from '../assets/images/NEW-logo-peach-trans.png';
import instagram from '../assets/images/instagram.png';
import email from '../assets/images/email.png';
import phone from '../assets/images/phone.png';

//----- EXPORTS -----//
export default function Footer() {

    //Return
    return (
        <footer>
            <section>
                <div className='footer-company'>
                <img src={cookie} alt="cookie logo" />
                    <h4>
                        Spontaneous <br />
                        Confections
                    </h4>
                </div>
                <div className='social-media'>
                    <a
                        className='insta-link'
                        href="https://www.instagram.com/spontaneous_confections/"
                        target='_blank'>
                        <img src={instagram} alt="instagram" />
                        <p>@spontaneous_confections</p>
                    </a>
                    <a
                        className='email-link'
                        href="mailto: baked@spontaneuosconfections.com">
                        <img src={email} alt="email" />
                        <p>baked@spontaneousconfections.com</p>
                    </a>
                    <a
                        className='phone-link'
                        href="tel: 831-480-5166">
                        <img src={phone} alt="phone" />
                        <p>(831) 480-5166</p>
                    </a>
                </div>
            </section>
            <div className='copyright'>
                <p>Spontaneous Confections © 2024</p>
            </div>
        </footer>
    )
}