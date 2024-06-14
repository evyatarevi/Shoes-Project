import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shoes"}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to={"/shoes/add"}>Add</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
