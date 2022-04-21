import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
      if(!currentUser.isAdmin)
      {
          window.location.href='/'
      }
  }, [])
  return (
    <div>
        <div className="row justify-content-center p-3">
        <div className="col-md-10">
      <h2 style={{ fontSize: "35px" }}>Admin</h2>
      <ul className="adminfunctions">
            <li><Link to='userslist' style={{color:'white'}}>Users List</Link></li>
            <li><Link to='orderslist' style={{color:'white'}}>Orders List</Link></li>
            <li><Link to='pizzaslist' style={{color:'white'}}>Pizzas List</Link></li>
            <li><Link to='addpizza' style={{color:'white'}}>Add Pizza</Link></li>
          </ul>
          </div>
          <Outlet />
          </div>
    </div>
  );
}

export default Admin;
