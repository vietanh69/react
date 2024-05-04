import { memo, useState } from "react";
import {Routes,Route,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
const Nav=()=>{
    return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/photo">
                  Photo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

  
export default memo(Nav);
