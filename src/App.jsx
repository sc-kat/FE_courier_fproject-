import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar color="white" textColor="#265073" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
      {/* <div className="message flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3">
        <p>The product was added to your cart.</p>
      </div> */}
    </>
  );
};

export default App;
