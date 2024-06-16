import { ShoeCard } from "../../index.js";
import useProductsContext from "../../hooks/useProductsContext";
import "./ShoesGallery.css";

const ShoesGallery = () => {
  const { products } = useProductsContext();

  return (
    <section>
      <h2>ShoesGallery</h2>
      <section className="shoes-container">
        {products.map((product) => (
          <ShoeCard
            id={product.id}
            img={product.img}
            price={product.price}
            key={product.id}
          />
        ))}
      </section>
    </section>
  );
};

export default ShoesGallery;
