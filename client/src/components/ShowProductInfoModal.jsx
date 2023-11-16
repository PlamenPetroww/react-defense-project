import { useState, useEffect } from "react";
import * as productService from '../services/productService';
import ProductDeleteModal from "./ProductDeleteModal";

const ShowProductInfoModal = ({
    onClose,
    productId,
}) => {

    const [product,  setProducts] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)

    
    useEffect(() => {
        productService.getOne(productId)
        .then(result =>  setProducts(result))
        .catch(error => console.log(error));
    }, [productId]);

    // Show delete modal after click at the delete button

    const deleteProductClickHandler = (productId) => {
        console.log(productId)
        // setSelectedProduct(productId);
        setShowDelete(true);
    };

    // const deleteClickHandler = async () => {
    //     console.log('delete')
    // }

  

//   // After click at the delete button and make request Delete
    const deleteProductHandler = async () => {
        // try {
        //     await productService.remove(selectedProduct);
        //      setProducts((state => state.filter((product) => product._id !== selectedProduct)));
        // } catch (error) {
        //     console.log(error)
        // }
        // setShowDelete(false);

        console.log('delete user');
    }

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
                <button type="button" onClick={deleteProductClickHandler}>Delete</button>
                
                {showDelete && (
                <ProductDeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteProductHandler}
                    />
                )}
            </div>
        </section>
    );
};

export default ShowProductInfoModal;