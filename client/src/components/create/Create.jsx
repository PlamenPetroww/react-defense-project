import { useNavigate } from 'react-router-dom';

import * as restaurantService from '../../services/restaurantService';

import './create.css';
const Create = ({
    onClose,
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
                 <h2 className="anmelden">Show Your Restaurant to the World</h2>
             </div>
             <div className="formular">
                 <form onSubmit={createProductSubmitHandler} id="kontakt-formular">
                     <div className="kontakt-formular-center">
                     <label htmlFor="title">Your Restarurant Name: </label>
                     <input type="text" id="title" name="title" placeholder="Title" />
                     <div>
                     <label htmlFor="category">Chef: </label>
                     <input type="text" id="chef" name="chef" placeholder="Chef"/>
                     </div>
                     <div>
                     <label htmlFor="city">City:  </label>
                     <input type="text" id="city" name="city" placeholder="City"/>
                     </div>
                     <div>
                     <label htmlFor="category">Category: </label>
                     <input type="text" id="category" name="category" placeholder="Category"/>
                     </div>
                     <div>
                     <label htmlFor="stars">Stars: </label>
                     <input type="text" id="stars" name="stars" placeholder="Stars Level"/>
                     </div>
                     <div>
                     <label htmlFor="email">Email: </label>
                     <input type="text" name="email" placeholder="Email"/>
                     </div>
                     <div>
                     <label htmlFor="imageUrl">ImageUrl</label>
                     <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl"/>
                     </div>
                     <textarea name="description" id="description" htmlFor="description" placeholder="Your description" />               
                     <button className="button button--red--absenden" type="submit" name="absendenbutton">Create!</button>
                     </div>
                 </form>
             </div>
         </section>
        </>
    );
};

export default Create;