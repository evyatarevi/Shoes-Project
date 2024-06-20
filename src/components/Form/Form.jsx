/* eslint-disable react/prop-types */
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct, deleteProduct, updateProduct } from "../../api/api";
import useProductsContext from "../../hooks/useProductsContext";
import "./Form.css";

const Form = ({ handlerForm }) => {
  const { products, setProducts } = useProductsContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [imageURLInput, setImageURLInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const handleAddForm = async (event) => {
    event.preventDefault();
    try {
      const newProduct = await createProduct({
        img: imageURLInput,
        price: priceInput,
      });
      setProducts([...products, newProduct]);
      navigate("/shoes");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateForm = async (event) => {
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
      console.error(error);
    }
  };

  useEffect(() => {
    if (handlerForm !== "add" && products && products.length > 0) {
      const { img, price } = products.find((product) => product.id === id);
      setImageURLInput(img);
      setPriceInput(price);
    }
  }, [handlerForm, products, id]);

  const handleImageURLInput = (event) => {
    setImageURLInput(event.target.value);
  };

  const handlePriceInput = (event) => {
    setPriceInput(event.target.value);
  };

  const handleRemoveProduct = async () => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      navigate("/shoes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <form
          onSubmit={handlerForm === "add" ? handleAddForm : handleUpdateForm}
          className="styled-form"
        >
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
          {handlerForm === "add" && (
            <>
              <button type="submit" className="form-button">
                Add
              </button>
              <Link to={"/shoes"} className="form-button delete">
                Cancel
              </Link>
            </>
          )}
          {handlerForm !== "add" && (
            <>
              <button type="submit" className="form-button">
                Update
              </button>
              <button
                type="button"
                className="form-button delete"
                onClick={handleRemoveProduct}
              >
                Delete
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default Form;
