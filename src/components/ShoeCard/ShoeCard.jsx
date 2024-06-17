import { Link } from "react-router-dom";
import "./ShoeCard.css";

/* eslint-disable react/prop-types */
const ShoeCard = ({ id, img, price }) => {
  return (
    <div className="card">
      <img src={img} alt="shoe-image" className="card-img" />
      <p className="card-price">{price}$</p>
      <Link to={`/shoes/${id}`} className="card-link">
        Manage
      </Link>
    </div>
  );
};

export default ShoeCard;
