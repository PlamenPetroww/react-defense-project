import { useEffect, useState } from 'react';
import ListProducts from './ListProducts';
import * as productService from '../services/productService';

const ProductListItem = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, [])

    return(
        <section className="wrapper">
            {products.map(product => (
                <ListProducts 
                    key={product._id}
                    title={product.title}
                    firstName={product.firstName}
                    lastName={product.lastName}
                    email={product.email}
                    createdAt={product.createdAt}
                    imageUrl={product.imageUrl}
                    description={product.description}
                />
            ))}
        </section>
    );
};

export default ProductListItem;