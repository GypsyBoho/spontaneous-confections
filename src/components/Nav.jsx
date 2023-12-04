//----- IMPORTS -----//

//React
import { Link } from 'react-router-dom';

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
                <Link to="/about">ABOUT</Link>
                <Link to="/menu">MENU</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
    )
}