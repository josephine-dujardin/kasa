import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './header.css';

function Header() {

  return (
    <header>
      <div className="div_container">
        <Link to="/">
          <img alt='kasa_logo' src={logo} className="home_logo" />
        </Link>

        <nav className="nav_banner">
          <NavLink to="/" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}>Accueil</NavLink>
          <NavLink to="/a-propos" style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}>A propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header