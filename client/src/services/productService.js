const baseUrl = 'http://localhost:3030/jsonstore/products';

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

export const create = async (data) => {

    const body = {
        title: data.title,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        description: data.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const result = await response.json();
    return result;
};

export const remove = async (productId) => {
    const response = await fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
}