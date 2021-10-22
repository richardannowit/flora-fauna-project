import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api';

export default async function connectAPI (method, url, data) {
    //function comnunnication between client and server
    return await axios({
        method,
        url,
        data
    })
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
        return false;
    })
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

async function getProductsByName (ContentSearch) {
    const result = await connectAPI('get',`/foods/food_name/${ContentSearch}`);
    return result;
}

async function getProductsById (IdProduct) {
    const result = await connectAPI('get', `/foods/id/${IdProduct}`);
    return result;
}

async function getProductsByIdCategory (id_category) {
    //get list products by id category
    const result =  await connectAPI('get', `/foods/id_category/${id_category}`);
    return result;
}

async function postOrder (data) {
    //get status order
    const result = await connectAPI('post', '/order', data);
    return result;
}

async function postMessage (data) {
    //get status order
    const result = await connectAPI('post', '/contract', data);
    return result;
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
    getProducts,
    getProductsByName,
    getProductsByIdCategory,
    getProductsById
}

//export post order
export {
    postOrder
}

//export get categories
export {
    getCategories
}

//export get contract
export {
    postMessage
}