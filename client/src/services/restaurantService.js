import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/restaurants';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const create = async (restaurantData) => {
    const result = await request.post(baseUrl, restaurantData);

    return result;
};

export const getOne = async (productId) => {
    const response = await fetch(`${baseUrl}/${productId}`);
    const result = await response.json();

    return result;
}



// export const remove = async (productId) => {
//     const response = await fetch(`${baseUrl}/${productId}`, {
//         method: 'DELETE'
//     });

//     const result = await response.json();

//     return result;
// }