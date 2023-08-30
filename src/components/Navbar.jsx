import React from "react";
import './Navbar.css';
import {BsFillBagFill} from 'react-icons/bs';




function Navbar() {

  return (
  
    <div ClassName="Navbar">
  <header>
    <div ClassName="container-lg">
      <div ClassName="row">
        <div ClassName="col">
        <nav ClassName="navbar  navbar-expand-lg  justify-content-center ">
  <div ClassName="container-lg">
    <div ClassName="navbar-brand" href="#"><img src="img/logo.png" alt="j" ClassName="img-fluid" /></div>
    <div ClassName=" navbar-toggle d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ClassName="fas fa-bars " ></span>
    <span ClassName="fas fa-times d-none"></span>
    
    </div>
    <div ClassName="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
      <ul ClassName="navbar-nav m-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <a ClassName="nav-link px-3 " aria-current="page" href="/">Home</a>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link px-3 " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About<i ClassName="fa-solid fa-chevron-down"></i>
          </a>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a ClassName="dropdown-item" href="History">History</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="">Leadership</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="Core">Core values</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="Distribute">Distributation</a></li>
    
          </ul>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link px-3" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Products<i ClassName="fa-solid fa-chevron-down" ></i>
          </a>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a ClassName="dropdown-item" href="#">Personal care</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="#">Bathroom Care</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="#">Floor & Surafce Care</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="#">General Care</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="#">Kitchen Care</a></li>
          </ul>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link px-3" href="#" tabindex="-1" >Innovation & Technology</a>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link px-3 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Media<i ClassName="fa-solid fa-chevron-down" ></i>
          </a>
          <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a ClassName="dropdown-item" href="/">Facebook</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="#">Instagram</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="/">Linkdin</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="/">Twitter</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="/">Youtube</a></li>
          </ul>
        </li>
      </ul>
     
       <div ClassName="button">

      <button ClassName="btn btn-outline-green " type="submit">Contact Us</button>
       </div>
      
    </div>
    <div ClassName="right-nav">

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
