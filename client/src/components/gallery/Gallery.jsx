import { useEffect, useState } from "react";

import * as restaurantService from '../../services/restaurantService';

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

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatum voluptate. Repudiandae ipsum magnam quidem esse cum libero, rem ab, maxime est consequatur minima aliquam, nostrum necessitatibus eum aspernatur corporis.</p>
        </>
    );
};

export default Gallery;