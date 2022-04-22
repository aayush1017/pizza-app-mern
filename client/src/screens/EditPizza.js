import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { editPizza, getPizzaById } from '../actions/pizzaAction'
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Editpizza({match}) {
    const {pizzaid=""} = useParams()

    const dispatch = useDispatch()
    const [name, setname] = useState("");
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const {pizza, error, loading} = getpizzabyidstate;

    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const {editsuccess, editerror, editloading} = editpizzastate;

    useEffect(() => {

      if(pizza){

        if(pizza._id==pizzaid){
          setname(pizza.name)
          setsmallprice(pizza?.prices?.[0]['small'])
          setmediumprice(pizza?.prices?.[0]['medium'])
          setlargeprice(pizza?.prices?.[0]['large'])
          setimage(pizza.image)
          setdescription(pizza.description)
          setcategory(pizza.category)
        } 
        else {
          dispatch(getPizzaById(pizzaid))
        }
      }
      else {
        dispatch(getPizzaById(pizzaid))
      }
    }, [pizza, dispatch])

    function formHandler(e){
      e.preventDefault()
  
      const editedpizza = {
        _id: pizzaid, //If this doen's work then add pizzaid at the end
        name,
        image,
        description,
        category,
        prices: {
          "small": smallprice,
          "medium": mediumprice,
          "large": largeprice
        }
      }
      dispatch(editPizza(editedpizza))
    }

  return (
    <div>
        <h1>Edit Pizza</h1>
        <h1>Pizza Id = {pizzaid}</h1> 
        <div className="text-left">

        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}
        {editsuccess && (<Success success="Pizza details successfully updated" />)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler}>
            <input className="form-control" type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input className="form-control" type="number" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
            <input className="form-control" type="number" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
            <input className="form-control" type="number" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
            <input className="form-control" type="text" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}} />
            <input className="form-control" type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
            <input className="form-control" type="url" placeholder="image url" value={image} onChange={(e)=>{setimage(e.target.value)}} />
            <button className="btn mt-3" type="submit" >Edit Pizza</button>
        </form>
        </div>
    </div>
  )
}