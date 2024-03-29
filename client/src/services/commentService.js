import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (restaurantId) => {
    const query = new URLSearchParams({
        where: `restaurantId="${restaurantId}"`,
        load: `owner=_ownerId:users`,
    });
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (restaurantId, text) => {
    const newComment = await request.post(baseUrl, {
        restaurantId,
        text,
    });

    return newComment;
};