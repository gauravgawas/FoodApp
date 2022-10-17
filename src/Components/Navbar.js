import React from "react";
import { Context } from "../App";
export default function Nav(){
  const {dispatch,searchRef}=React.useContext(Context);
  
  return(
          <nav class="navbar navbar-expand-lg container-fluid">
          <a className="brand" href="/"><img className="logo" src="../Images/icons8-sunny-side-up-eggs-48.png"></img>FoodApp</a>
          <button class="navbar-toggler btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li>
        <form class="d-flex" role="search">
        <input class="form-control me-2" ref={searchRef} onKeyUpCapture={()=>dispatch({type:"CHANGE"})} type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success"  type="submit"><b>Search</b></button>
        </form>
        </li>
      </ul>
      </div>
      </nav>
  );
}