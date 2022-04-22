import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPizzaById } from '../actions/pizzaAction'

export default function Editpizza({match}) {

    const {pizzaid=""} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPizzaById(pizzaid))
    }, [])
    console.log(pizzaid)
  return (
    <div>
        <h1>Edit Pizza</h1>
        <h1>Pizza Id = {pizzaid}</h1> 
        {/* Above code not working */}
    </div>
  )
}