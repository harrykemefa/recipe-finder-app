import React from 'react'

const Nav = () => {
    return (
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-sticky navbar-dark">
  <div className="container">
    <a href="./index.html" className="navbar-brand"><h3>foody</h3></a>

    
    <ul className="navbar-nav navbar-nav-secondary order-lg-3">
      <li className="nav-item d-lg-none">
        <a className="nav-link nav-icon" href="" role="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="bi bi-list"></span>
        </a>
      </li>
      <li className="nav-item d-none d-lg-block">
        <a href="#" className="btn btn-outline-white rounded ms-2">
         Cook Guide <i class="bi bi-book"></i>
        </a>
      </li>
    </ul>

    
    <div className="collapse navbar-collapse" id="navbar" data-bs-parent="#mainNav">
      <ul className="navbar-nav">
 
        <li className="nav-item dropdown dropdown-hover">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Docs
          </a>
          <ul className="dropdown-menu dropdown-menu-detailed" aria-labelledby="navbarDropdown-5">
            <li><a className="dropdown-item " href="./docs/index.html">
                <span>
                  <i className="bi bi-book"></i>
                  Get Started
                  <small>Customising and building</small>
                </span>
              </a>
            </li>
            <li><a className="dropdown-item " href="./docs/accordion.html">
                <span>
                  <i className="bi bi-grid"></i>
                  Components
                  <small>Full list of components</small>
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item d-lg-none">
          <a href="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/" className="nav-link text-primary">Buy Cube</a>
        </li>
      </ul>
    </div>



  




  </div>
</nav>
    )
}
export default Nav;


