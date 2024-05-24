//----- IMPORTS -----//

//CSS
import '../assets/css/SeasonalMenu.css';

//Images
import brownie from '../assets/images/brownie-pic.jpeg';
import turtlebrownie from '../assets/images/turtle-brownie.jpg';
import pumpkin from '../assets/images/pumpkin.png';
import turtle from '../assets/images/topsy-turvey-turtles.jpeg';
import chocolatechunkcookie from '../assets/images/cookies.png'
import buttercookie from '../assets/images/butter-cookie.png';
import chocolatecake from '../assets/images/chocolate-cake.jpeg';
import persiancake from '../assets/images/persian-cake.jpg';
import apricotpistachio from '../assets/images/apricot-pistachio-tart.jpg';
import chocolateentremet from '../assets/images/chocolate-entremet-v2.jpg';
import chocolateraspberry from '../assets/images/chocolate-raspberry-tart.jpg';
import lemonmeringue from '../assets/images/lemon-meringue-tart.jpg';

//----- EXPORTS -----//
export default function Menu() {

    const items = [
        {
            image: brownie,
            title: 'Fudge Brownie',
            price: '5.00',
            description: 'Lavender-infused chocolate ganache atop rich fudge brownies.'
        },
        {
            image: turtlebrownie,
            title: 'Turtle Brownie',
            price: '5.00',
            description: 'A rich fudge brownie with dark chocolate ganache topped with salted caramel and a candied pecan.'
        },
        {
            image: chocolatechunkcookie,
            title: 'Chocolate Chunk Cookie',
            price: '4.00',
            description: 'Gourmet chocolate chunk cookie with hints of cardamom and ginger.'
        },
        {
            image: apricotpistachio,
            title: 'Apricot Pistachio Tartlet',
            price: '10.00',
            description: 'Tartlet with almond pistachio cream, apricot coulis, rolled in pistachios and topped with a candied rose.'
        },
        {
            image: chocolateraspberry,
            title: 'Chocolate Raspberry Tartlet',
            price: '10.00',
            description: 'Tartlet with almond pistachio cream, apricot coulis, rolled in pistachios and topped with a candied rose.'
        },
        {
            image: lemonmeringue,
            title: 'Lemon Meringue Tartlet',
            price: '10.00',
            description: 'Tartlet with fresh meyer lemon curd topped with a toasted lemon meringue rose.'
        },
        {
            image: chocolateentremet,
            title: 'Chocolate Entremet',
            price: '15.00',
            description: 'Chocolate tartlet with a layer of crunchy praline, chocolate ganache with a raspberry coulis, topped with a chocolate pate a bombe mousse, enrobed in a mirror glaze.'
        },
        {
            image: pumpkin,
            title: 'Pumpkin Cheesecake',
            price: '6.00',
            description: 'Honey meringue crowned pumpkin cheesecake, adorned with gingersnap dust.'
        },
        {
            image: turtle,
            title: 'Topsy Turvey Turtle',
            price: '2.75',
            description: 'Pumpkin shortbread cookies filled with 72% dark chocolate ganache, a candied pecan, and a touch of salted caramel.'
        },
        {
            image: buttercookie,
            title: 'Butter Cookie',
            price: '30.00 a box 34ct',
            description: 'Luxurious butter cookies, available in both heavenly chocolate-infused and classic variations for an extra indulgent touch.'
        },
        {
            image: chocolatecake,
            title: 'Flourless Chocolate Cake',
            price: '4" round $30 9" round $70 ',
            description: '72% dark flourless chocolate cake, enrobed in a mirror glaze.'
        },
        {
            image: persiancake,
            title: 'Persian Love Cake',
            price: '12.00',
            description: 'Cardamom-infused Persian love cake adorned with the delicate flavors of pistachio and rose.'
        },
    ]

    //Return
    return (
        <section className='seasonal-menu'>
            {/* <h3>Seasonal Menu</h3>
            <section className='seasonal-menu-grid'>
                {items.map((item) => (
                    <div className='s-menu-item'>
                        <div className='s-menu-image'>
                            <img className='s-image' src={item.image} alt={item.alt} />
                            <p className='s-description'>{item.description}</p>
                        </div>
                        <div className='s-menu-info'>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </section> */}
        </section>
    )
}