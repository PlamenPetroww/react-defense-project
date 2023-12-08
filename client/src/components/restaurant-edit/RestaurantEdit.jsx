import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as restaurantService from '../../services/restaurantService';
import { validateTitle } from '../../validate/validate';

import './restaurant-edit.css';

const RestaurantEdit = () => {

    const navigate = useNavigate();
    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState({
        title: '',
        chef: '',
        city: '',
        category: '',
        stars: '',
        email: '',
        imageUrl: '',
        description: '',
    });

    const [validate, setValidate] = useState({
        title: '',
      });
    
    useEffect(() => {
        restaurantService.getOne(restaurantId)
            .then(result => {
                setRestaurant(result)
            });
    }, [restaurantId]);
        
        const editProductSubmitHandler = async (e) => {
            e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await restaurantService.edit(restaurantId, values);

            navigate('/gallery');
        } catch(err) {
            // Error notification
            console.log(err)
        }
    }


    const onChange = (e) => {
        const { name, value } = e.target;
        setRestaurant((state) => ({ ...state, [name]: value }));
        setValidate((state) => ({ ...state, [name]: '' }));
      };




    return (
        <section className="ontainer-with-cube" >
             <div className="anmelden__tok">
                 <h2 className="anmelden">Show Your Restaurant to the World</h2>
             </div>
             <div className="formular">
                 <form onSubmit={editProductSubmitHandler} id="kontakt-formular">
                     <div className="kontakt-formular-center">
                     <label htmlFor="title">Your Restarurant Name: </label>
                     <input type="text" id="title" name="title" value={restaurant.title} onChange={onChange} placeholder="Title" />
                     <div>
                     <label htmlFor="category">Chef: </label>
                     <input type="text" id="chef" name="chef" value={restaurant.chef} onChange={onChange} placeholder="Chef"/>
                     </div>
                     <div>
                     <label htmlFor="city">City:  </label>
                     <input type="text" id="city" name="city" value={restaurant.city} onChange={onChange} placeholder="City"/>
                     </div>
                     <div>
                     <label htmlFor="category">Category: </label>
                     <input type="text" id="category" name="category" value={restaurant.category} onChange={onChange} placeholder="Category"/>
                     </div>
                     <div>
                     <label htmlFor="stars">Stars: </label>
                     <input type="text" id="stars" name="stars" value={restaurant.stars} onChange={onChange} placeholder="Stars Level"/>
                     </div>
                     <div>
                     <label htmlFor="email">Email: </label>
                     <input type="text" name="email" value={restaurant.email} onChange={onChange} placeholder="Email"/>
                     </div>
                     <div>
                     <label htmlFor="imageUrl">ImageUrl</label>
                     <input type="text" id="imageUrl" name="imageUrl" value={restaurant.imageUrl} onChange={onChange} placeholder="imageUrl"/>
                     </div>
                     <textarea name="description" value={restaurant.description} onChange={onChange} id="description" htmlFor="description" placeholder="Your description" />               
                     <button className="button button--red--absenden" type="submit" name="absendenbutton" value="Edit Restaurants">Edit</button>
                     </div>
                 </form>
             </div>
         </section>
    );
};

export default RestaurantEdit;