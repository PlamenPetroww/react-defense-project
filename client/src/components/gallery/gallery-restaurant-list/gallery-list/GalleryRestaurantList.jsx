import { Link } from 'react-router-dom';
import './GalleryRestaurantList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const GalleryRestaurantList = ({
    _id,
    title,
    chef,
    stars,
    imageUrl,
    city

}) => {
    const starsArray = Array.from({ length: parseInt(stars, 10) });
    return(
        <section className='gallery-cards'>
            <div className="cards-layout flex">
                <div className='card'>
                    <section>
                        <h2 className="gallery-title title_justify">{title}</h2>
                        <img className="container-gallery-img" src={imageUrl} alt="imageUrl" />
                        <p className='title_italic'><strong>Chef</strong>: {chef}</p>
                        <p className='container-gallery-info'><strong>Stars: </strong>{starsArray.map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="#FFFF00" />
        ))}</p>
                        <p className='container-gallery-info'><strong>City: </strong>{city}</p>
                        <p className="details-paragraph"><Link to={`/gallery/${_id}`}>Details and Comments</Link></p>
                    </section>
                </div>
            </div>
            
        </section>
    );
};

export default GalleryRestaurantList;