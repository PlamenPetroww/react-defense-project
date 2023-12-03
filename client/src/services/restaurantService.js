import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/restaurants';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const create = async (restaurantData) => {
    const result = await request.post(baseUrl, restaurantData);

    return result;
};

export const edit = async (restraurantId, restaurantData) => {
    const result = await request.put(`${baseUrl}/${restraurantId}`, restaurantData);

    return result;
};

export const getOne = async (restaurantId) => {
    const result = await request.get(`${baseUrl}/${restaurantId}`);

    return result;
}



export const remove = async (restaurantId) => request.remove(`${baseUrl}/${restaurantId}`);