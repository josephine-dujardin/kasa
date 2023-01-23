import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const HomeLogo = styled.img`
  height: 60px;
`

const DivContainer = styled.div`
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavBanner = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FF6060;
`

function Header() {

  return (
    <header>
      <DivContainer>
        <Link to="/">
          <HomeLogo src={logo}/>
        </Link>

        <NavBanner>
          <NavLink to="/" style={({ isActive }) => ({
              color: isActive ? '#FF6060' : '#FF6060',
              fontSize: isActive ? '20px' : '20px',
              textDecoration: isActive ? 'underline' : 'none',
            })}>Accueil</NavLink>
          <NavLink to="/a-propos" style={({ isActive }) => ({
              color: isActive ? '#FF6060' : '#FF6060',
              fontSize: isActive ? '20px' : '20px',
              textDecoration: isActive ? 'underline' : 'none',
            })}>A propos</NavLink>
        </NavBanner>
      </DivContainer>
    </header>
  )
}

export default Header