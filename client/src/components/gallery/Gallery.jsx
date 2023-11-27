import { useEffect, useState } from "react";
import './gallery.css';

import * as restaurantService from '../../services/restaurantService';
import GalleryRestaurantList from "./gallery-restaurant-list/galleryRestaurantList";

const Gallery = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        restaurantService.getAll()
            .then(result => setRestaurants(result));
    }, []);
    return(
        <section className="gallery">
            <div className="container">
                <h1 className="gallery-container-title">Gallery</h1>
                {restaurants.map(restaurant => (
                    <GalleryRestaurantList key={restaurant._id} {...restaurant}/>
                ))}
                {restaurants.length === 0 && <h3>No Restaurants</h3>} 
            </div>
        </section>
    );
};

export default Gallery;