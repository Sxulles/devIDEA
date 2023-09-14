import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from "../assets/img/logo.png"

export const NavMenu = () => {

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary" aria-label="Ninth navbar example">
        <div class="container-xl">
          <Link to={"/home"}><img className="w-50" src={logo} alt="Logo"/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample07XL">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link fs-4 text-white me-5" to={"/idea"}>New Idea</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-purple fs-4">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}