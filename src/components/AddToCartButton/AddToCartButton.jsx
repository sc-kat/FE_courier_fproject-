import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AddToCartButton = ({ id }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const addProductToCart = (e) => {
    let productsInCart = [];
    if (window.localStorage.getItem("cart")) {
      productsInCart = JSON.parse(window.localStorage.getItem("cart"));
    }

    const productAlreadyAdded = productsInCart.find(
      (product) => product.id === e.target.id
    );
    if (productAlreadyAdded) {
      productAlreadyAdded.qt = productAlreadyAdded.qt + 1;
    } else {
      productsInCart.push({ id: e.target.id, qt: 1 });
    }

    window.localStorage.setItem("cart", JSON.stringify(productsInCart));
    setShowMessage(true);
  };

  return (
    <>
      {showMessage && (
        <div className="message flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3">
          Product added to cart!
        </div>
      )}

      <button
        id={id}
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={addProductToCart}
      >
        Add to cart
      </button>
    </>
  );
};

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCartButton;
