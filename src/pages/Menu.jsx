//----- IMPORTS -----//

//CSS
import '../assets/css/Menu.css';

//Images
// import star from '../assets/images/star.png';
// import header from '../assets/images/header.png';

//----- EXPORTS -----//
export default function Menu() {

    const items = [
        {
            title: 'Fudge Brownie',
            price: '5.00',
            description: 'Lavender-infused chocolate ganache atop rich fudge brownies.'
        },
        {
            title: 'Pumpkin Cheesecake',
            price: '6.00',
            description: 'Honey meringue crowned pumpkin cheesecake, adorned with gingersnap dust.'
        },
        {
            title: 'Topsy Turvey Turtle',
            price: '2.75',
            description: 'Petite pumpkin shortbread cookies filled with luscious chocolate ganache, a candied pecan, and a touch of salted caramel.'
        },
        {
            title: 'Chocolate Chunk Cookie',
            price: '3.00',
            description: 'Gourmet cookies featuring the delightful blend of cardamom, ginger, and generous chocolate chunks.'
        },
        {
            title: 'Butter Cookie',
            price: '2.50',
            description: 'Luxurious butter cookies, available in both heavenly chocolate-infused and classic variations for an extra indulgent touch.'
        },
        {
            title: 'Flourless Chocolate Cake',
            price: '18.00',
            description: 'Lavish 72% dark chocolate flourless cake, enrobed in a velvety lavender chocolate ganache.'
        },
        {
            title: 'Persian Love Cake',
            price: '12.00',
            description: 'Cardamom-infused Persian love cake adorned with the delicate flavors of pistachio and rose.'
        },
        {
            title: 'Cupcake',
            price: '4',
            description: 'Delectable vanilla cupcakes topped with decadent French buttercream.'
        },
    ]

    //Return
    return (
        <section>
            <div>
                <h3>meet the menu</h3>
                <p></p>
            </div>
            <section>
                {items.map((item) => (
                    <div>
                        <div>
                            {/* <img src={item.image} alt={item.alt} /> */}
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}