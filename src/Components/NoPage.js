import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


export default function NoPage() {
  let Style = {
    margin : "5rem",


  }
  return (
    <div style={Style}>
        <h1>Oops!!!</h1>
        <br />
        <h3>This Page Does not Exist...</h3>
        <NavLink to="/">
         Click Here To go back to Home Page.
</NavLink> 
    </div>
  )
}
