import axios from "axios";

const URL = "https://6661d7dc63e6a0189febcfe6.mockapi.io/api/v1/shoes";


const fetchProducts = async () => {
    try {
        return await axios(URL);
    } catch (error) {
        throw new Error(error);
    }
}

export { fetchProducts };