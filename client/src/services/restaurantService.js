const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (restaurantData) => {
    const response = await fetch(`${baseUrl}/restaurants`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body : JSON.stringify(restaurantData)
    });

    const result = await response.json();

    return result;
    
};

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);
    return data;
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