/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Act1() {

  return (
    <div >
    <h1 className="text-center">Merchant Of Venice</h1>
  <br></br>
    <div className="hstack gap-3">
         <br />
          <NavLink to="/sc1">
          <button   className="btn btn-primary btn-lg">Act-1 Scene-1</button>
</NavLink> 
<div> </div>
<NavLink to="/sc2">
          <button  className="btn btn-primary btn-lg" >Act-1 Scene-2</button>
</NavLink> 
    </div>
    </div>
  )
}            