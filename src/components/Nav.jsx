//----- IMPORTS -----//

//CSS
import '../assets/css/Nav.css';

//Images
import cookie from '../assets/images/cookie-logo.png';

//----- EXPORTS -----//
export default function Nav() {

    //Return
    return (
        <section>
            <div>
                <h1>Spontaneous Confections</h1>
                <img src={cookie} alt="cookie logo" />
            </div>
            <div>
                <a href="">ABOUT</a>
                <a href="">MENU</a>
                <a href="">CONTACT</a>
            </div>
        </section>
    )
}