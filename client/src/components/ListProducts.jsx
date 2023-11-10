const ListProducts = ({
    title,
    firstName,
    lastName,
    email,
    createdAt,
    imageUrl,
    description
}) => {
    return (
    <section className="wrapper">
            <div className="wrapper_box">
                <img className="img__klein" src={imageUrl} alt="" />
                <h2 className="title_justify">{title}</h2>
                <h3 className="title_italic">
                Post by ${firstName} ${lastName} / {createdAt}
                </h3>
                <p className="p_justify">
                {description}
                </p>
                <p className="p_justify email">email : ${email}</p>
                <button className="button wrapper_box_button" type="button" name="button">
                Mehr Info
                </button>
                <div></div>
            </div>
        </section>
    )
};

export default ListProducts;