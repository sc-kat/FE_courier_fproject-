import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductCard = (props) => {
  return (
    <div
      key={props.product.id}
      className="relative m-10 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <img src={props.product.imageURL} alt={props.product.name} />

      <div className="mt-4 px-5 pb-5">
        <Link to={`/details/${props.product.id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">
            {props.product.name}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {props.product.price} RON
            </span>
          </p>
        </div>
        <AddToCartButton id={props.product.id} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
