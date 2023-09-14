import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from "../assets/img/logo.png"

export const NavMenu = () => {

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
        <div className="container-xl">
          <Link to={"/home"}><img className="dsa" src={logo} alt="Logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-4 text-white me-5" to={"/idea"}>New Idea</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-purple fs-4">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}