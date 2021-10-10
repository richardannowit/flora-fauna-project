import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export default async function connectAPI(method, url, token=null, data=null){
    return await axios({
        method,
        url,
        headers: {'Authorization': token !== null && 'Bearer ' + token},
        data
    })
    .then(res=>res.data)
    .catch(err=> console.log(err))
}



//API FOOD
async function getFoods(token=null) {
    const res = await connectAPI('get', '/foods', token)
    return res
} 

async function getFoodByName(food_name, token=null) {
    const res = await connectAPI('get', `/foods/food_name/${food_name}`, token)
    return res
}

async function postFood(data, token=null) {
    const res = await connectAPI('post', `/foods`, token, data)
    return res
}

async function putFood(food_id, data, token=null) {
    const res = await connectAPI('put', `/foods/${food_id}`, token, data)
    return res
}

async function deleteFood(food_id, token=null) {
    const res = await connectAPI('delete', `/foods/${food_id}`, token)
    return res
}



//API CATEGORIES
async function getCategories(token=null){
    const res = await connectAPI('get', '/categories', token)
    return res
}

async function getCategoriesByName(category_name, token=null) {
    const res = await connectAPI('get', `/categories/categories_name/${category_name}`, token)
    return res
}

async function postCategory(data, token=null) {
    const res = await connectAPI('post', `/categories`, token, data)
    return res
}

async function putCategory(category_id, data, token=null) {
    const res = await connectAPI('put', `/categories/${category_id}`, token, data)
    return res
}

async function deleteCategory(category_id, token=null) {
    const res = await connectAPI('delete', `/categories/${category_id}`, token)
    return res
}



//API USERS
async function getUsers(token=null) {
    const res = await connectAPI('get', '/users', token)
    return res
}

async function getUserByName(username, token=null) {
    const res = await connectAPI('get', `/users/username/${username}`, token)
    return res
}

async function getUserById(user_id, token=null) {
    const res = await connectAPI('get', `/users/user_id/${user_id}`, token)
    return res
}

async function putUser(user_id, data, token=null) {
    const res = await connectAPI('put', `/users/${user_id}`,token, data)
    return res
}

async function deleteUser(user_id, token=null) {
    const res = await connectAPI('delete', `/users/${user_id}`, token)
    return res
}



//API ORDERS
async function getOrders(token=null){
    const res = await connectAPI('get', '/orders', token)
    return res
}

async function getOrdersByName(customer_name, token=null) {
    const res = await connectAPI('get', `/orders/customer_name/${customer_name}`, token)
    return res
}

async function getOrderStatistic(year, token=null){
    const res = await connectAPI('get', `/orders/statistic/${year}`, token)
    return res
}


//API Auth
async function userLogin(data, token=null){
    const res = await connectAPI('post', '/auth/login', token, data)
    return res
}

async function userRegister(data, token=null) {
    const res = await connectAPI('post', '/auth/register', token, data)
    return res
}


//EXPORT AUTH API
export {
    userLogin,
    userRegister,
}


//EXPORT FOOD API
export {
    getFoods,
    getFoodByName,
    postFood,
    putFood,
    deleteFood
}


//EXPORT CATEGORIES API
export {
    getCategories,
    getCategoriesByName,
    postCategory,
    putCategory,
    deleteCategory
}


//EXPORT USERS API
export {
    getUsers,
    getUserById,
    getUserByName,
    putUser,
    deleteUser
}


//EXPORT ORDERS API
export {
    getOrders,
    getOrdersByName,
    getOrderStatistic
}




