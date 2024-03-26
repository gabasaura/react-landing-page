import React from "react";

//create your first component
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand me-auto mb-2 mb-md-0" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
	);
};

export default NavBar;