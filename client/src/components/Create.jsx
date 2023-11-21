import { useNavigate } from 'react-router-dom';

import * as restaurantService from '../services/restaurantService';

const Create = ({
    onClose,
    onProductCreate
}) => {

    const navigate = useNavigate();
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const restaurantData = Object.fromEntries(new FormData(e.currentTarget));
        
        try {
            await restaurantService.create(restaurantData);

            navigate('/gallery');
        } catch(err) {
            // Error notification
            console.log(err)
        }
        
    }

    return (
        <>
            <section className="ontainer" >
             <div onClick={onClose}></div>
             <div className="anmelden__tok">
                 <h2 className="anmelden">Create your favourites Burger or Salat</h2>
             </div>
             <div className="formular">
                 <form onSubmit={createProductSubmitHandler} id="kontakt-formular">
                     <div className="kontakt-formular-center">
                     <label htmlFor="title"/>
                     <input type="text" name="title" placeholder="Title" />
                     <div>
                     <label htmlFor="firstName"/>
                     <input type="text" name="category" placeholder="Category"/>
                     </div>
                     <div>
                     <label htmlFor="lastName"/>
                     <input type="text" name="stars" placeholder="Stars Level"/>
                     </div>
                     <div>
                     <label htmlFor="lastName"/>
                     <input type="text" name="email" placeholder="Email"/>
                     </div>
                     <label htmlFor="email"/>
                     <input type="text" name="address" placeholder="Address"/>
                     <div>
                     <label htmlFor="imageUrl"/>
                     <input type="text" name="imageUrl" placeholder="Your favourites Restaurant photo"/>
                     </div>
                     <textarea name="description" htmlFor="description" placeholder="Your description" />               
                     <button className="button button--red--absenden" type="submit" name="absendenbutton">Create!</button>
                     </div>
                 </form>
             </div>
         </section>
        </>
    );
};

export default Create;