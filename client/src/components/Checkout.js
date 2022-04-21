import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderAction'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'

function Checkout({subtotal}) {
  const orderState = useSelector((state) => state.placeOrderReducer)
  const {loading, error, success} = orderState
  const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
  return (
    <div>
      
      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong' />)}
      {success && (<Success success='Your Order Placed Successfully'/>)}


        <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_x5xA7XoNZVcZlFudqSqEKHzQ00WrNoBypS'
            currency='INR'>
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout