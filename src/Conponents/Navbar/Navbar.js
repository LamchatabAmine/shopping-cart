import "./Navbar.css";

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

// import {Product} from '../Product/Product';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            Navbar
          </Link>
          <div className="d-flex" id="navbarText">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cart" className="nav-link text-light">
                  Cart
                  <Icon icon="material-symbols:shopping-cart" />
                  <div className="notification">2</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
