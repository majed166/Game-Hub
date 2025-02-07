import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'f4825cdfeffe44d98565dcb2d7d2443b'
    }
})