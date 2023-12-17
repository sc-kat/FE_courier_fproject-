import { useState, useEffect } from "react";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageURL: "",
  });
  const [currentProductId, setCurrentProductId] = useState("");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb85d0d1df5273eecf4d.mockapi.io/products"
      );
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const addNewProduct = () => {
    const url = "https://654bc6c15b38a59f28efb3a2.mockapi.io/products";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    fetch(url, options);
  };

  const deleteProduct = async (id) => {
    const url = `https://654bc6c15b38a59f28efb3a2.mockapi.io/products/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const updatedProducts = products.filter((product) => product.id != id);
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-10">
          <label htmlFor="name">Name</label>
          <input
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            type="text"
            id="name"
            value={product.name}
            onChange={(e) => {
              const productName = e.target.value;
              setProduct({ ...product, name: productName });
            }}
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            value={product.imageURL}
            onChange={(e) => {
              const imageURL = e.target.value;
              setProduct({ ...product, imageURL: imageURL });
            }}
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            value={product.price}
            onChange={(e) => {
              const productPrice = e.target.value;
              setProduct({ ...product, price: productPrice });
            }}
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
            value={product.description}
            onChange={(e) => {
              const productDescription = e.target.value;
              setProduct({ ...product, description: productDescription });
            }}
          />
        </div>
        <button
          onClick={addNewProduct}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Save
        </button>
      </div>
      <div>
        {products && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image URL</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.imageURL} width={80} alt="" />{" "}
                  </td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button
                      id={product.id}
                      onClick={(e) => {
                        const productId = e.target.id;
                        setCurrentProductId(productId);
                        const productToBeEdited = products.find(
                          (product) => product.id === productId
                        );
                        setProduct(productToBeEdited);
                      }}
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      id={product.id}
                      onClick={(e) => deleteProduct(e.target.id)}
                      className="bg-[brown] hover:bg-[gray] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
