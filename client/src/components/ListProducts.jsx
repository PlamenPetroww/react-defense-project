import { useState } from "react";
import formatIsoDateToHumanReadable from "../utils/isoData";
import ShowProductInfoModal from "./ShowProductInfoModal";

const ListProducts = ({
    productId,
    title,
    firstName,
    lastName,
    email,
    createdAt,
    updatedAt,
    imageUrl,
    description,
    onProductClick,
    onDeleteClick,
}) => {

    const [showInfo, setShowInfo] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const hideShowInfoModal = () => {
        setShowInfo(false);
    };

    const infoProductHandler = () => {
        onProductClick(productId);
    };

    const deleteClickHandler = () => {
        onDeleteClick(productId)
    }

    return (
            <div className="wrapper_box">
                <img className="img__klein" src={imageUrl} alt={`${firstName}'s profile`} />
                <h2 className="title_justify">{title}</h2>
                <h3 className="title_italic">
                Post by {firstName} {lastName} / {formatIsoDateToHumanReadable(createdAt)}
                <br />Updated at: {formatIsoDateToHumanReadable(updatedAt)}
                </h3>
                <p className="p_justify">
                {description}
                </p>
                <p className="p_justify email">email : {email}</p>
                <button className="button wrapper_box_button" type="button" name="button" onClick={infoProductHandler}>
                Mehr Info
                </button>
                {showInfo && (
                <ShowProductInfoModal 
                    onClose={hideShowInfoModal}
                    onDeleteClick={deleteClickHandler}
                />)}
            </div>
    )
};

export default ListProducts;