import React from 'react'
import { Link,useLocation } from 'react-router-dom'


 

const Navbar = () => {
  let location = useLocation();
  return (
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src="./logo256.png" alt="" style={{height:"30px"}}/>Privy</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
         <Link className="btn btn-primary mx-2" to="/login"  role="button">Login</Link>
        <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
