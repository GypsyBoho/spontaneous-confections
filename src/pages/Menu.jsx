//----- IMPORTS -----//

//CSS
import '../assets/css/Menu.css';

//Components
import RegularMenu from '../components/RegularMenu';
import SeasonalMenu from '../components/SeasonalMenu';


//----- EXPORTS -----//
export default function Menu() {

    //Return
    return (
        <section className='menu'>
            <h3>MEET THE MENU</h3>
            <section className='menu-grid'>
               <div className='r-menu-grid'>
                <RegularMenu />
               </div>
               <div className='s-menu-grid'>
                <SeasonalMenu />
               </div>
            </section>
        </section>
    )
}