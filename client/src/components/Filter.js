import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaAction";


function Filter() {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')
  return (
    <div className="container">
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="col-md-3">
                <input onChange={(e)=>{setsearchkey(e.target.value)}} value={searchkey} type="text" className="form-control w-100" placeholder="search" />
            </div>
            <div className="col-md-3 mt-2">
                <select className="form-control" value={category} onChange={(e)=>{setcategory(e.target.value)}} >
                    <option value="all">All</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
            </div>
            <div className="col-md-3">
                <button className="btn w-100 mt-2" onClick={()=>dispatch(filterPizzas(searchkey, category))}>Filter</button>
            </div>
        </div>
    </div>
  )
}

export default Filter