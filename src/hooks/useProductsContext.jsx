import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

const useProductsContext = () => useContext(ProductContext); //return {products, setProducts}

export default useProductsContext;
