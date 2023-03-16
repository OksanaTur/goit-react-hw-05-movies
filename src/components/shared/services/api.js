import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'e6335e45e66a73839ab061046ca7a249',
    },
});