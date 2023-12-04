import { Link } from "react-router-dom";
import "./style.css";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <div
      className="navbar shadow-md"
      style={{
        backgroundColor: props.color ?? "transparent",
        color: props.textColor ?? "black",
      }}
    >
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="menu">
        <div>
          <Link to="/admin">Admin</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};
