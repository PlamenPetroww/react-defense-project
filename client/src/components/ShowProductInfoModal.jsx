import { useState, useEffect } from "react";
import * as productService from '../services/productService';

const ShowProductInfoModal = ({
    onClose,
    productId
}) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        productService.getOne(productId)
        .then(result => setProduct(result))
        .catch(error => console.log(error));
    }, [productId]);

    return(
        <section className="ontainer overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="anmelden__tok">
                <h2 className="anmelden">Check the full Information</h2>
            </div>
            <div className="formular modal">
                
                <p>${product.title}</p>
                <img src={product.imageUrl} alt={product.firstName} />
                <p>${product.firstName}</p>
                <p>${product.lastName}</p>
                <p>${product.description}</p>
                <p>${product.email}</p>
            </div>
        </section>
    );
};

export default ShowProductInfoModal;