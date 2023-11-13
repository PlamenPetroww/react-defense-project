import { useEffect, useState } from 'react';
import ListProducts from './ListProducts';
import * as productService from '../services/productService';
import CreateProduct from './CreateProduct';
import ShowProductInfoModal from './ShowProductInfoModal';

const ProductListItem = () => {

    const [products, setProducts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)


    useEffect(() => {
        productService.getAll()
            .then((result) => setProducts(result))
            .catch(error => console.log(error));
    }, []);

    const createProductClickHandler = () => {
        setShowCreate(true);
    };

    const hideCreateProduct = () => {
        setShowCreate(false);
    }

    const productInfoClickHandler = async (productId) => {
        setSelectedProduct(productId);
        setShowInfo(true);
    };
    

    const productCreateHandler = async (e) => {
        e.preventDefault();
        try {
            const data = Object.fromEntries(new FormData(e.currentTarget));
            const newProduct = await productService.create(data);
            setProducts((state) => [...state, newProduct])
        } catch (error) {
            console.log(error)
        }
        setShowCreate(false);
    }

    return(
        <section className="wrapper">
            {showInfo && (
                <ShowProductInfoModal 
                    onClose={() => setShowInfo(false)}
                    productId={selectedProduct}
                />
            )}
            {products.map((product) => (
                <ListProducts 
                    key={product._id}
                    productId={product._id}
                    title={product.title}
                    firstName={product.firstName}
                    lastName={product.lastName}
                    email={product.email}
                    createdAt={product.createdAt}
                    updatedAt={product.updatedAt}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    onProductClick={() => productInfoClickHandler(product._id)}
                />
            ))}
            <button className="button btn-new" type="button" onClick={createProductClickHandler}>Create New Salat/Burgers</button>            
            {showCreate && (
                <CreateProduct
                onClose={hideCreateProduct}
                onProductCreate={productCreateHandler}
                />
            )}
        </section>
    );
};

export default ProductListItem;