import React, { useState } from "react";
import './Navbar.css';
import {BsFillBagFill} from 'react-icons/bs';
import { Link } from "react-router-dom";



function Navbar() {

  return (
  
    <div ClassNameName="Navbar">
  <header>
    <div ClassNameName="container-lg">
      <div ClassNameName="row">
        <div ClassNameName="col">
        <nav ClassNameName="navbar  navbar-expand-lg  justify-content-center ">
  <div ClassName="container-lg">
    <div ClassName="navbar-brand" to="#"><img src="img/logo.png" alt="" ClassNameName="img-fluid" /></div>
    <div ClassName=" navbar-toggle d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ClassName="fas fa-bars " ></span>
    <span ClassName="fas fa-times d-none"></span>
    
    </div>
    <div ClassName="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
      <ul ClassName="navbar-nav m-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <Link ClassName="nav-link px-3 " aria-current="page" to="/">Home</Link>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link px-3 " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About<i ClassName="fa-solid fa-chevron-down"></i>
          </a>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link ClassName="dropdown-item" to="/History">History</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">Leadership</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="/Core">Core values</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="/Distribute">Distributation</Link></li>
    
          </ul>
        </li>
        <li ClassName="nav-item dropdown">
          <Link ClassName="nav-link px-3" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Products<i ClassName="fa-solid fa-chevron-down" ></i>
          </Link>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link ClassName="dropdown-item" to="#">Personal care</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">Bathroom Care</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">Floor & Surafce Care</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">General Care</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">Kitchen Care</Link></li>
          </ul>
        </li>
        <li ClassName="nav-item">
          <Link ClassName="nav-link px-3" to="#" tabindex="-1" >Innovation & Technology</Link>
        </li>
        <li ClassName="nav-item dropdown">
          <Link ClassName="nav-link px-3 " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Media<i ClassName="fa-solid fa-chevron-down" ></i>
          </Link>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link ClassName="dropdown-item" to="/">Facebook</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="#">Instagram</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="/">Linkdin</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="/">Twitter</Link></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><Link ClassName="dropdown-item" to="/">Youtube</Link></li>
          </ul>
        </li>
      </ul>
     
       <div ClassNameName="button">

      <button ClassName="btn btn-outline-green " type="submit">Contact Us</button>
       </div>
      
    </div>
    <div ClassNameName="right-nav">

    <a ><BsFillBagFill fontSize={"35px"}  color='#1dbfc1'/></a>
    </div>
  </div>
</nav>
        </div>
     
      </div>
    </div>
  </header>

  
 
    </div>
  );
}
export default Navbar;
