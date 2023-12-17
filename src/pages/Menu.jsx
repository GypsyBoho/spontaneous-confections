//----- IMPORTS -----//

//CSS
import '../assets/css/Menu.css';

//Images
import brownie from '../assets/images/brownies.jpeg';
import pumpkin from '../assets/images/pumpkin.png';
import turtle from '../assets/images/topsy-turvey-turtles';
import chocolatechunkcookie from '../assets/images/cookies.png'
import buttercookie from '../assets/images/butter-cookie.png';
import chocolatecake from '../assets/images/chocolate-cake.jpeg';
import persiancake from '../assets/images/persian-cake.jpg';
import cupcake from '../assets/images/cupcakes.jpeg';

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
            image: pumpkin,
            title: 'Pumpkin Cheesecake',
            price: '6.00',
            description: 'Honey meringue crowned pumpkin cheesecake, adorned with gingersnap dust.'
        },
        {
            image: turtle,
            title: 'Topsy Turvey Turtle',
            price: '2.75',
            description: 'Petite pumpkin shortbread cookies filled with luscious chocolate ganache, a candied pecan, and a touch of salted caramel.'
        },
        {
            image: chocolatechunkcookie,
            title: 'Chocolate Chunk Cookie',
            price: '3.00',
            description: 'Gourmet cookies featuring the delightful blend of cardamom, ginger, and generous chocolate chunks.'
        },
        {
            image: buttercookie,
            title: 'Butter Cookie',
            price: '2.50',
            description: 'Luxurious butter cookies, available in both heavenly chocolate-infused and classic variations for an extra indulgent touch.'
        },
        {
            image: chocolatecake,
            title: 'Flourless Chocolate Cake',
            price: '18.00',
            description: '72% dark chocolate flourless cake, enrobed in a velvety lavender chocolate ganache.'
        },
        {
            image: persiancake,
            title: 'Persian Love Cake',
            price: '12.00',
            description: 'Cardamom-infused Persian love cake adorned with the delicate flavors of pistachio and rose.'
        },
        {
            image: cupcake,
            title: 'Cupcake',
            price: '4.00',
            description: 'Delectable vanilla cupcakes topped with decadent French buttercream.'
        },
    ]

    //Return
    return (
        <section className='menu'>
            <h3>MEET THE MENU</h3>
            <section className='menu-grid'>
                {items.map((item) => (
                    <div className='menu-item'>
                        <div className='menu-image'>
                            <img className='image' src={item.image} alt={item.alt} />
                            <p className='description'>{item.description}</p>
                        </div>
                        <div className='menu-info'>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}