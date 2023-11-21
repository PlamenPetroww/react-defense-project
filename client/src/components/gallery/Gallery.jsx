import { useEffect, useState } from "react";

import * as restaurantService from '../../services/restaurantService';
import GalleryRestaurantList from "./gallery-restaurant-list/galleryRestaurantList";

const Gallery = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        restaurantService.getAll()
            .then(result => setRestaurants(result));
    }, []);

    console.log(restaurants);
    return(
        <>
            <h2>Gallery</h2>
            {restaurants.map(restaurant => (
                <GalleryRestaurantList key={restaurant._id} {...restaurant}/>
            ))}

            {restaurants.length === 0 && <h3>No Restaurants</h3>} 
        </>
    );
};

export default Gallery;