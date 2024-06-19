import { useState } from "react";
import { createProduct } from "../../api/api";
import useProductsContext from "../../hooks/useProductsContext";

const AddShoe = () => {
  const { products, setProducts } = useProductsContext();

  const [imageURLInput, setImageURLInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const handleImageURLInput = (event) => {
    setImageURLInput(event.target.value);
  };

  const handlePriceInput = (event) => {
    setPriceInput(event.target.value);
  };

  const handleForm = async () => {
    try {
      const newProduct = await createProduct({
        img: imageURLInput,
        price: priceInput,
      });
      setProducts(products.push(newProduct));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
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
        {/* <button
          type="button"
          className="form-button delete"
          onClick={removeProduct}
        >
          Delete
        </button> */}
      </form>
    </section>
  );
};

export default AddShoe;
