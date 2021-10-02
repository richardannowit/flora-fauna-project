import axios from 'axios'

export default async function ConnectAPI(method, url, data=null){
    return axios({
        method,
        url,
        data
    })
    .then(res=>res.data)
    .catch(err=> console.log(err))
}
