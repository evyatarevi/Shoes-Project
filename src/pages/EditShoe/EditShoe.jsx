import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct, deleteProduct } from "../../api/api.js";
import useProductsContext from "../../hooks/useProductsContext";
import "./EditShoe.css";

const EditShoe = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useProductsContext();
  const { id } = useParams();
  const [imageURLInput, setImageURLInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const { img, price } = products.find((product) => product.id === id);
      setImageURLInput(img);
      setPriceInput(price);
    }
  }, [products, id]);

  const handleImageURLInput = (event) => {
    setImageURLInput(event.target.value);
  };

  const handlePriceInput = (event) => {
    setPriceInput(event.target.value);
  };

  const handleForm = async (event) => {
    console.log("delete occur");
    event.preventDefault();
    try {
      await updateProduct(id, {
        img: imageURLInput,
        price: priceInput,
      });
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return { ...product, img: imageURLInput, price: priceInput };
          }
          return product;
        })
      );
      navigate("/shoes");
    } catch (error) {
      console.log(error);
    }
  };

  const removeProduct = async () => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      navigate("/shoes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <form onSubmit={handleForm} className="styled-form">
          <label htmlFor="image-url-input" className="form-label">
            Image URL
          </label>
          <input
            id="image-url-input"
            type="text"
            className="form-input image-url-input"
            value={imageURLInput}
            onChange={handleImageURLInput}
          />
          <label htmlFor="price-input" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-input price-input"
            value={priceInput}
            onChange={handlePriceInput}
          />
          <button type="submit" className="form-button">
            Update
          </button>
          <button
            type="button"
            className="form-button delete"
            onClick={removeProduct}
          >
            Delete
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditShoe;
