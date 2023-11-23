import { Link } from 'react-router-dom';

const GalleryRestaurantList = ({
    _id,
    title,
    stars,
    imageUrl

}) => {
    return(
        <>
        <h2>{title}</h2>
        <br />
        <br />
        <p>{stars}</p>
        <br />
        <p>{imageUrl}</p>
        <br />
        <p></p>
        <br />
        <p></p>
        <Link to={`/gallery/${_id}`}>Details</Link>
        </>
    );
};

export default GalleryRestaurantList;