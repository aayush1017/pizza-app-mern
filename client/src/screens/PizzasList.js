import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas, deletePizza} from "../actions/pizzaAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

function PizzasList() {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div>
      <h2>Pizzas List</h2>
      {loading && (<Loading />)}
      {error && (<Error error='Something Went Wrong' />)}

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            {pizzas && pizzas.map((pizza) => {
              return <tr>
                <td>{pizza.name}</td>
                <td>
                  Small: {pizza?.prices?.[0]['small']} <br />
                  Medium: {pizza?.prices?.[0]['medium']} <br />
                  Large: {pizza?.prices?.[0]['large']} 
                </td>
                <td>{pizza.category}</td>
                <td>
                  <i className="fa fa-trash m-1" onClick={()=>dispatch(deletePizza(pizza._id))} ></i>
                  <nav>
                    <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-1"></i></Link>
                  </nav>
                  
                </td>
              </tr>
            })}
          </tbody>
      </table>

    </div>
  );
}

export default PizzasList;
