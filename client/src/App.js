import "./App.css";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orders from "./screens/Orders";
import Admin from "./screens/Admin";
import AddPizza from "./screens/AddPizza";
import UsersList from "./screens/UsersList";
import OrdersList from "./screens/OrdersList";
import PizzasList from "./screens/PizzasList";
import Editpizza from "./screens/EditPizza";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin/*" element={<Admin />}>
            <Route path="userslist" element={<UsersList />} />
            <Route path="orderslist" element={<OrdersList />} />
            <Route path="pizzaslist" element={<PizzasList />} />
            <Route path="addpizza" element={<AddPizza />} />
            <Route path="editpizza/:pizzaid" element={<Editpizza />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
