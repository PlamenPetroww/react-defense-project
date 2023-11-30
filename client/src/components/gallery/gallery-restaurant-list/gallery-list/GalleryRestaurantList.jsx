import { Link } from 'react-router-dom';
import './GalleryRestaurantList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBirthdayCake,
        faDrumstickBite,
        faGlassCheers,
        faMusic,
        faUtensilSpoon,
        faUtensils,
        faStar
        } from '@fortawesome/free-solid-svg-icons';
import formatIsoDateToHumanReadable from '../../../../utils/isoData';

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
            <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faUtensilSpoon} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faBirthdayCake} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faUtensils} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faDrumstickBite} color="#DD0031" rotation={270} />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faMusic} color="#EFD81D" rotation={270} />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGlassCheers} color="#D4AF37" rotation={270} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryRestaurantList;