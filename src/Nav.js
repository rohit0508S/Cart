import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/amazonLogo.png"
import flag from "./images/flag.png"
import cart from "./images/cart-icon.png"
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
        <div className="container-fluid rohit-nav">
          <img className="logo" src={logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active force" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link force" href="/#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle force" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/#">Action</a></li>
                  <li><a className="dropdown-item" href="/#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/#">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex form-side">

              <li className="nav-item dropdown  disc">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/#">Mobile</a></li>
                  <li><a className="dropdown-item" href="/#">Laptop</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/#">Charger</a></li>
                </ul>
              </li>


              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>


            <ul className="nav-right">
              <li><img className="logo" src={flag} /></li>
              <li><img className="logo invert" src={cart} /></li>
              <li>cart</li>
              
            </ul>

          </div>
        </div>
      </nav>
      
      
      </>

  )
}
export default Nav;