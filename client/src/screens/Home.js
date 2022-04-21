import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import {getAllPizzas} from '../actions/pizzaAction'
import Loading from "../components/Loading";
import Error from "../components/Error"
import Filter from "../components/Filter";

function Home() {

  const dispatch = useDispatch()

  const pizzastate = useSelector(state=> state.getAllPizzasReducer)
  const {pizzas, error, loading} = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">

        {loading ? (<Loading />) : error ? (<Error error='Something went wrong' />) : (
          pizzas.map(pizza=>{
            return <div key={pizza._id} className="col-md-3 m-3">
                <div>
                    <Pizza pizza={pizza}/>
                </div>
            </div>
          })
        )}
      </div>
    </div>
  );
}

export default Home;
