const GalleryRestaurantList = ({
    title,
    category,
    stars,
    imageUrl

}) => {
    return(
        <>
        <h2>{title}</h2>
        <br />
        <p>{category}</p>
        <br />
        <p>{stars}</p>
        <br />
        <p>{imageUrl}</p>
        <br />
        <p></p>
        <br />
        <p></p>
        </>
    );
};

export default GalleryRestaurantList;