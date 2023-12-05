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
            <div className='box'>
                <p className='promo'>See you at the <br /> 11th Annual <br /> Winter Art Market!</p>
                <p className='message'> 
                Tannery Arts Center <br />
                December 9th <br />
                10am - 5pm
                </p>
                <button>
                    <a href="https://www.tanneryartscenter.org/winter-art-market-23" target='_blank'>MORE INFO</a>
                    {/* <ScrollLink to="contact" smooth={true} duration={500}>
                        CONTACT US
                    </ScrollLink> */}
                </button>
            </div>
        </section>
    )
}