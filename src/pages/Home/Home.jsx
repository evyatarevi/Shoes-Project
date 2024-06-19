import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="button-container">
        <Link to="/shoes" className="button">
          Manage Your Products
        </Link>
        <Link to="/shoes/add" className="button">
          Add New Product
        </Link>
      </div>
    </section>
  );
};

export default Home;
