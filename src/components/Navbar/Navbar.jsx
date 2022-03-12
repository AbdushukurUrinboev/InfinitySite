import React from "react";
import './Navbar.css';
import InfinityLogo from '../../assets/logo.svg';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />


function Navbar() {
    return (
      <>
            <div>
            <nav className="navbar navbar-expand-sm navbar-light  mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={InfinityLogo} className="me-3 logoNavbar" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarExample-expand-sm" aria-controls="offcanvasNavbarExample-expand-sm">
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasNavbarExample-expand-sm"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" data-bs-hideresize="true" tabindex="-1" id="offcanvasNavbarExample-expand-sm" aria-labelledby="offcanvasNavbarExample-expand-smLabel" aria-hidden="true">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel"><img src={InfinityLogo} width="300" height="50" className="me-3" alt="logoNavbar" /></h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kurslar
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">IELTS</a></li>
                                        <li><a className="dropdown-item" href="#">Web dasturlash</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Biz haqimizda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Aloqa</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-success applyBtn" type="submit">Ro'yxatdan o'tish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </>
    )
}

export default Navbar;