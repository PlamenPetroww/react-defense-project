import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (restaurantId) => {
    const query = new URLSearchParams({
        where: `restaurantId="${restaurantId}"`
    });
    const result = await request.get(`${baseUrl}`);

    // TODO: trqbwa mi collections service, za da se pokazvat komentarite na pravilniq details page

    return Object.values(result).filter(comment => comment.restaurantId === restaurantId);
};

export const create = async (restaurantId, username, text) => {
    const newComment = await request.post(baseUrl, {
        restaurantId,
        username,
        text,
    });

    return newComment;
};