import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://burger-project-7b079.firebaseio.com/'
});


export default axiosOrders;