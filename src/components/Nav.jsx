//----- IMPORTS -----//

//React
import { Link as ScrollLink } from 'react-scroll';

//CSS
import '../assets/css/Nav.css';

//Images
import cookie from '../assets/images/cookie-logo.png';

//----- EXPORTS -----//
export default function Nav() {

    //Return
    return (
        <nav>
            <div className='logo'>
                <h1>Spontaneous <br /> Confections</h1>
                <img src={cookie} alt="cookie logo" />
            </div>
            <div className='links'>
                <div>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        ABOUT
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink to="menu" smooth={true} duration={500}>
                        MENU
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        CONTACT
                    </ScrollLink>
                </div>
            </div>
        </nav>
    )
}