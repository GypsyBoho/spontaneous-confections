//----- IMPORTS -----//

//Components
import Banner from '../components/Banner';

//CSS
import '../assets/css/About.css';

//Images
import cookie from '../assets/images/cookie-logo.png';

//----- EXPORTS -----//
export default function About() {

    //Return
    return (
        <section className='about'>
            <div className='article'>
                <div className='about-us'>
                    <h2>THE SPARK <br /> THAT STARTED <br /> IT ALL</h2>
                    <p>Thank you for stopping by! We're passionately
                        crafting the most exquisite and unique pastries in
                        Santa Cruz. As a small, veteran-owned baking business,
                        we deeply appreciate your support for local enterprises.</p>
                    <p>Looking for delicious treats to captivate your guests at
                        your next event or party? Reach out to us a
                        <a href="mailto:baked@spontaneousconfections.com" className='about-email'> baked@spontaneousconfections.com</a> to place your order.
                        Let us elevate your occasion with our irresistible creations!</p>
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