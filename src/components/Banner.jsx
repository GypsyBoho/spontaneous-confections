//----- IMPORTS -----//

//CSS
import '../assets/css/Banner.css';

//Images
import cookie from '../assets/images/cookie-logo.png';

//----- EXPORTS -----//
export default function Banner() {

    //Return
    return (
        <section>
            <p> AN EXPLOSION OF FLAVOR </p>
            <img src={cookie} alt="cookie logo" />
        </section>
    )
}