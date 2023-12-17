import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";

const Details = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb85d0d1df5273eecf4d.mockapi.io/products"
      );
      const products = await response.json();
      setProductDetails(products.find((product) => product.id === productId));
    };

    fetchProducts();
  }, []);

  return productDetails ? (
    <div className="flex">
      <div>
        <img src={productDetails.imageURL} alt={productDetails.name} />
      </div>
      <div>
        <h1>{productDetails.name}</h1>
        <p>{productDetails.description}</p>
        <p>{productDetails.price}</p>
        <p>{productDetails.stockQty}</p>
        <AddToCartButton id={productDetails.id} />
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Details;
