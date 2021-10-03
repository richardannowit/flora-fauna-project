import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export default async function connectAPI(method, url, data=null){
    return axios({
        method,
        url,
        data
    })
    .then(res=>res.data)
    .catch(err=> console.log(err))
}



//API FOOD
async function getFoods() {
    const res = await connectAPI('get', '/foods')
    return res
} 

async function getFoodByName(food_name) {
    const res = await connectAPI('get', `/foods/food_name/${food_name}`)
    return res
}

async function postFood(data) {
    const res = await connectAPI('post', `/foods`, data)
    return res
}

async function putFood(food_id, data) {
    const res = await connectAPI('put', `/foods/${food_id}`, data)
    return res
}

async function deleteFood(food_id) {
    const res = await connectAPI('delete', `/foods/${food_id}`)
    return res
}



//API CATEGORIES
async function getCategories(){
    const res = await connectAPI('get', '/categories')
    return res
}

async function getCategoriesByName(category_name) {
    const res = await connectAPI('get', `/categories/categories_name/${category_name}`)
    return res
}

async function postCategory(data) {
    const res = await connectAPI('post', `/categories`, data)
    return res
}

async function putCategory(category_id, data) {
    const res = await connectAPI('put', `/categories/${category_id}`, data)
    return res
}

async function deleteCategory(category_id) {
    const res = await connectAPI('delete', `/categories/${category_id}`)
    return res
}



//API USERS
async function getUsers() {
    const res = await connectAPI('get', '/users')
    return res
}

async function getUserByName(username) {
    const res = await connectAPI('get', `/users/username/${username}`)
    return res
}

async function getUserById(user_id) {
    const res = await connectAPI('get', `/users/user_id/${user_id}`)
    return res
}

async function putUser(user_id, data) {
    const res = await connectAPI('put', `/users/${user_id}`, data)
    return res
}

async function deleteUser(user_id) {
    const res = await connectAPI('delete', `/users/${user_id}`)
    return res
}



//API ORDERS
async function getOrders(){
    const res = await connectAPI('get', '/orders')
    return res
}

async function getOrdersByName(customer_name) {
    const res = await connectAPI('get', `/orders/customer_name/${customer_name}`)
    return res
}



//API Auth
async function userLogin(data){
    const res = await connectAPI('post', '/auth/login', data)
    return res
}

async function userRegister(data) {
    const res = await connectAPI('post', '/auth/register', data)
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
    getOrdersByName
}




