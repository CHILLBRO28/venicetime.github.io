/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Act1() {
  let Style = {
    margin : "1rem",


  }

  return (
    <div >
    <h1 className="text-center">Merchant Of Venice</h1>
  <br></br>
  <h1 style={Style} className="text-left">Act-1</h1>
        <br />
    <div  className="hstack gap-2">
    <br />
       
 <NavLink to="/A1_sc1">
          <button   className="btn btn-primary btn-lg">Scene_1</button>
</NavLink> 
<NavLink to="/A1_sc2">
          <button  className="btn btn-primary btn-lg" >Scene_2</button>
</NavLink> 
<NavLink to="/A1_sc3">
          <button  className="btn btn-primary btn-lg" >Scene_3</button>
</NavLink> 

    </div>
    <br />
<h1 style={Style} className="text-left">Act-2</h1>

<div  className="hstack gap-2">
  <br />
<NavLink to="/A2_sc1">
          <button  className="btn btn-primary btn-lg" >Scene_1</button>
</NavLink> 
<NavLink to="/A2_sc2">
          <button  className="btn btn-primary btn-lg" >Scene_2</button>
</NavLink> 
<NavLink to="/A2_sc3">
          <button  className="btn btn-primary btn-lg" >Scene_3</button>
</NavLink> 
</div>

    <h3 className='text-center fixed-bottom'>More Acts & Scenes to be added soon...</h3>

    </div>
  )
}            