import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'da9795a7a52a41b69ff067e791fd59ec'
    }
})