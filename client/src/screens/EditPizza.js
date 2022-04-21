import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPizzaById } from '../actions/pizzaAction'

function Editpizza({match}) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPizzaById(match?.params?.pizzaid))
    }, [])
    
  return (
    <div>
        <h1>Edit Pizza</h1>
        <h1>Pizza Id = {match?.params?.pizzaid}</h1> 
        {/* ABove code not working */}
    </div>
  )
}

export default Editpizza