import "./App.css";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import YourOrders from "./pages/YourOrders";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/yourOrders" element={<YourOrders />} />
      </Routes>
    </div>
  );
}

export default App;
