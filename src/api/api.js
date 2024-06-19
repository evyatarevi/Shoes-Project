import axios from "axios";

const URL = "https://6661d7dc63e6a0189febcfe6.mockapi.io/api/v1/shoes";


const fetchProducts = async () => {
    try {
        const response = await axios(URL);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

const createProduct = async (product) => {
    try {
        const response = await axios.post(URL, product);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

const updateProduct = async (id, details) => {
    try {
        const response = await axios.put(`${URL}/${id}`, details);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteProduct = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        throw new Error(error);
    }
}

export { fetchProducts, updateProduct, deleteProduct, createProduct };
