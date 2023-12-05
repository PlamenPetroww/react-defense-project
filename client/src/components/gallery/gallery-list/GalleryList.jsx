import { useEffect, useState } from "react";
import './galleryList.css';

import * as restaurantService from '../../../services/restaurantService';
import GalleryRestaurantList from "../gallery-restaurant-list/gallery-list/GalleryRestaurantList";

const Gallery = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        restaurantService.getAll()
            .then(result => setRestaurants(result))
            .catch(error => {
                console.log(error)
            });
    }, []);
    return(
        <section className="gallery">
            <div className="gallery-container">
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