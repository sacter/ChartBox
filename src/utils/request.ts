import axios from 'axios';

export default {
    install (Vue: any) {
        Vue.prototype.$axios = axios;
    }
}