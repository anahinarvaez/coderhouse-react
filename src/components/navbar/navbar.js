import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from './CartWidget';
import categorias from '../../data/categorias.json';
import {NavLink} from 'react-router-dom';
import "./navbar.css"

function NavBar() {
  return (
    <nav>
    <div class="nav-wrapper">
      <NavLink className="brand-logo" to={`/`}><i class="material-icons">restaurant</i> Burger 4D</NavLink>
      <ul class="right hide-on-med-and-down">
        {
          categorias.map(categoria => <li><NavLink to={`/categories/${categoria.id}`} activeClassName="active">{categoria.description}</NavLink></li>)
        }
        <li><CartWidget></CartWidget></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;