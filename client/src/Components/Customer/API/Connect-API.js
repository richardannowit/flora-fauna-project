import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api';

export default async function connectAPI (method, url, data) {
    //function comnunnication between client and server
    return await axios({
        method,
        url,
        data
    })
    .then(res => res.data)
    .catch(res => {});
}

async function getProducts (limit) {
    //get products with limti
    //if haven't limit then default limit = oo
    if (limit) {
        const reuslt = await connectAPI('get', `/foods/?limit=${limit}`);
        return reuslt;
    }
    const reuslt = await connectAPI('get', '/foods');
    return reuslt;
}


async function getCategories (limit) {
    //get products with limti
    //if haven't limit then default limit = oo
    if (limit) {
        const reuslt = await connectAPI('get', `/categories/?limit=${limit}`);
        return reuslt;
    }
    const reuslt = await connectAPI('get', '/categories');
    return reuslt;
}

//export get products
export {
    getProducts
}

//export get categories
export {
    getCategories
}