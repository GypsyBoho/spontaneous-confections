//----- IMPORTS -----//

//Components
import Banner from '../components/Banner';

//CSS
import '../assets/css/About.css';

//Images
import cookie from '../assets/images/whisk-spatula-logo-24.5.jpg';

//----- EXPORTS -----//
export default function About() {

    //Return
    return (
        <section className='about'>
            <div className='article'>
                <div className='about-us'>
                    <h2>AN EXPLOSION OF FLAVOR</h2>
                    <p>Come see taste and experience sweetness like never before. We're a black veteran owned business hard at work, creating the most delicious and distinctive pastries in Santa Cruz.
                    </p>
                    <p>Need delightful treats for your next event, party or celebration that will impress all your guests? Fill out the form below or send us an email at
                        <a href="mailto:baked@spontaneousconfections.com" className='about-email'> baked@spontaneousconfections.com</a> to place your order.
                        Let us elevate your occasion with our irresistible creations!
                    </p>
                    <p>
                    Thanks for supporting local!
                    </p>
                </div>
                <aside className='ft-image'>
                    <img src={cookie} alt="cookie logo" />
                </aside>
            </div>
            <div className='banner-container'>
                <Banner />
            </div>
        </section>
    )
}