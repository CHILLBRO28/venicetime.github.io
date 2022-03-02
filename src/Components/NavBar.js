/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  let Style = {
    width: '104%'
  }
  return (
    <div style={Style}>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="/"  >A Venice Time</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/about" > About Us</NavLink>

        </li>
    </ul>      
    </div>
  </div>
  {/*<div class="container-fluid">
    <div></div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>*/}
</nav>


    </div>
  )
}