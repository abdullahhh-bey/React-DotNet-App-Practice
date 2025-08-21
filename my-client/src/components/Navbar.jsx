import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className='fw-light'>Strapper</h1>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
