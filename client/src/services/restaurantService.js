import {request} from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/restaurants';

export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

export const create = async (restaurantData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body : JSON.stringify(restaurantData)
    });

    const result = await response.json();

    return result;
    
};



export const getOne = async (productId) => {
    const response = await fetch(`${baseUrl}/${productId}`);
    const result = await response.json();

    return result;
}



export const remove = async (productId) => {
    const response = await fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
}