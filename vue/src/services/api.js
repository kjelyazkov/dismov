import axios from 'axios'

const api = axios.create({
    baseURL: 'http://dismov.test/api',
    headers: {

    }
});

export default {
    test() {
        return api.get('/test')
    }
}