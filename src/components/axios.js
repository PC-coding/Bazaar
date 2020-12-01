import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-bazaar-596f2.cloudfunctions.net/api'
    // 'http://localhost:5001/bazaar-596f2/us-central1/api'
});

export default instance;