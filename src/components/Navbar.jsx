import React from "react";
import "./Navbar.css";
import { BsFillBagFill } from "react-icons/bs";
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="Navbar">
      <header>
        <div class="container-lg">
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg  justify-content-center ">
                <div class="container-lg">
                  <div class="navbar-brand" to="/">
                    <img src="img/logo.png" alt="" class="img-fluid" />
                  </div>
                  <div
                    class=" navbar-toggle d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="fas fa-bars "></span>
                    <span class="fas fa-times d-none"></span>
                  </div>
                  <div
                    class="collapse navbar-collapse justify-content-between "
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link
                          class="nav-link px-3 "
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link px-3 "
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          About<i class="fa-solid fa-chevron-down"></i>
                        </Link>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link class="dropdown-item" to="History">
                              History
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="Leader">
                              Leadership
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="Core">
                              Core values
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="Distribute">
                              Distributation
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link px-3"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Products<i class="fa-solid fa-chevron-down"></i>
                        </Link>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link class="dropdown-item" to="#">
                              Personal care
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="#">
                              Bathroom Care
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="#">
                              Floor & Surafce Care
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="#">
                              General Care
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="#">
                              Kitchen Care
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link px-2" to="IT" tabindex="-1">
                          Innovation & Technology
                        </Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link
                          class="nav-link px-3 "
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Media<i class="fa-solid fa-chevron-down"></i>
                        </Link>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link class="dropdown-item" to="/">
                              Facebook
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="#">
                              Instagram
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="/">
                              Linkdin
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="/">
                              Twitter
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="/">
                              Youtube
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div class="button">
                      <button class="btn btn-outline-green " type="submit">
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div class="right-nav">
                    <Link>
                      <BsFillBagFill   fontSize={"35px"} color="#1dbfc1 "/>
                    </Link>
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
