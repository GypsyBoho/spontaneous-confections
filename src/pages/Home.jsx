//----- IMPORTS -----//

//CSS
import '../assets/css/Home.css';

//Images
// import star from '../assets/images/star.png';
// import header from '../assets/images/header.png';

//----- EXPORTS -----//
export default function Home() {

    //Return
    return (
        <section className='home'>
            <div className='box'>
                <p className='promo'>Indulge in Festive Treats for Your Holiday Gatherings!</p>
                <p className='message'>Secure your sweet moments with us today.</p>
                <button>CONTACT US</button>
            </div>
        </section>
    )
}