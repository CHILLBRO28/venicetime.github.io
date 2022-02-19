/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Act1() {
  let Style = {
    margin : "5vh",


  }

  return (
    <div >
    <h1 className="text-center">Merchant Of Venice</h1>
  <br></br>
  <h1 style={Style} className="text-left">Act-1</h1>
        <br />
    <div className="hstack gap-4">
         <br />
       
          <NavLink to="/sc1">
          <button   className="btn btn-primary btn-lg">Scene-1</button>
</NavLink> 
<div  > </div>
<NavLink to="/sc2">
          <button  className="btn btn-primary btn-lg" >Scene-2</button>
</NavLink> 
    </div>
    </div>
  )
}            