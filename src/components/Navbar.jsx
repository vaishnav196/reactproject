import React from "react";
import "./Navbar.css";
import { BsFillBagFill } from "react-icons/bs";

function Navbar() {
  return (
    <div class="Navbar">
      <header>
        <div class="container-lg">
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg  justify-content-center ">
                <div class="container-lg">
                  <div class="navbar-brand" href="/">
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
                        <a
                          class="nav-link px-3 "
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link px-3 "
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          About<i class="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a class="dropdown-item" href="History">
                              History
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="">
                              Leadership
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="Core">
                              Core values
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="Distribute">
                              Distributation
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link px-3"
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Products<i class="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Personal care
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Bathroom Care
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Floor & Surafce Care
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              General Care
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Kitchen Care
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-2" href="#" tabindex="-1">
                          Innovation & Technology
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link px-3 "
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Media<i class="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a class="dropdown-item" href="/">
                              Facebook
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Instagram
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="/">
                              Linkdin
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="/">
                              Twitter
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="/">
                              Youtube
                            </a>
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
                    <a>
                      <BsFillBagFill   fontSize={"35px"} color="#1dbfc1 "/>
                    </a>
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
