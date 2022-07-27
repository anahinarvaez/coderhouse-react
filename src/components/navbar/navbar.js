import 'materialize-css/dist/css/materialize.min.css'

function NavBar() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="material-icons">restaurant</i>Burger 4D</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Hamburguesas</a></li>
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#"><i class="material-icons">shopping_cart</i></a></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;