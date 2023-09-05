import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import menuOptGrid from '../../assets/images/menuOptGrid.png'
import menuOptGraph from '../../assets/images/menuOptGraph.png'
import chevronDown from '../../assets/images/chevronDown.png'

export default function Navbar() {
  return (
    <section className="navbar__menu">
      <img className="navbar__menu__logo__img" src={logo} alt="Logo" />
      <nav>
        <div className="navbar__menu__list">
          <Link
            to="/dashboard"
            className="navbar__menu__list__item"
            tabIndex={-1}
          >
            <img
              className="navbar__menu__list__item__icon__img"
              src={menuOptGrid}
              alt="Menu option"
            />
            <span>Dashboard</span>
            <img
              className="navbar__menu__list__item__arrow__img"
              src={chevronDown}
              alt="Menu arrow"
            />
          </Link>
          <Link
            to="/produtos"
            className="navbar__menu__list__item"
            tabIndex={-2}
          >
            <img
              className="navbar__menu__list__item__icon__img"
              src={menuOptGraph}
              alt="Menu option"
            />
            <span>Produtos</span>
            <img
              className="navbar__menu__list__item__arrow__img"
              src={chevronDown}
              alt="Menu arrow"
            />
          </Link>
        </div>
      </nav>
    </section>
  )
}
