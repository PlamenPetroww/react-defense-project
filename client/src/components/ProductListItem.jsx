import { useEffect, useState } from 'react';
import ListProducts from './ListProducts';
import * as productService from '../services/productService';

const ProductListItem = () => {

    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, [])

    return(
            <ListProducts />
    );
};

export default ProductListItem;