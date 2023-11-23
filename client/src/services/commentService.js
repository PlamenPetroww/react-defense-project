import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (restaurantId, username, text) => {
    const newComment = await request.post(baseUrl, {
        restaurantId,
        username,
        text,
    });

    return newComment;
};