//----- IMPORTS -----//

//CSS
import '../assets/css/Footer.css';

//Images
import cookie from '../assets/images/cookie-logo.png';
import instagram from '../assets/images/instagram.png';
import email from '../assets/images/email.png';
import phone from '../assets/images/phone.png';

//----- EXPORTS -----//
export default function Footer() {

    //Return
    return (
        <footer>
            <div>
                <h1>Spontaneous Confections</h1>
                <img src={cookie} alt="cookie logo" />
            </div>
            <div>
                <a href="https://www.instagram.com/spontaneous_confections/" target='_blank'>
                    <img src={instagram} alt="instagram" />
                    <p>@spontaneuos_confections</p>
                </a>
                <a href="mailto: baked@spontaneuosconfections.com">
                    <img src={email} alt="email" />
                    <p>baked@spontaneuosconfections.com</p>
                </a>
                <a href="tel: 831-480-5166">
                    <img src={phone} alt="phone" />
                    <p>(831) 480-5166</p>
                </a>
            </div>
        </footer>
    )
}