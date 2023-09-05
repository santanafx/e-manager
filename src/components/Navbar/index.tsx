import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowLeft } from 'react-icons/md'

import { closeMenu, openMenu } from '../../store/reducers/navbar'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import menuOptGrid from '../../assets/images/menuOptGrid.png'
import menuOptGraph from '../../assets/images/menuOptGraph.png'
import chevronDown from '../../assets/images/chevronDown.png'

export default function Navbar() {
  const { isOpen } = useSelector((state: RootReducer) => state.navbar)

  const dispatch = useDispatch()

  const closeSideMenu = () => {
    dispatch(closeMenu())
  }

  const openSideMenu = () => {
    dispatch(openMenu())
  }

  return (
    <>
      {isOpen ? (
        <>
          <section className="navbar__menu">
            <img className="navbar__menu__logo__img" src={logo} alt="Logo" />
            <nav>
              <div className="navbar__menu__list">
                <Link
                  to="/dashboard"
                  className="navbar__menu__list__item"
                  tabIndex={1}
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
                  tabIndex={2}
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
          <div className="overlay" onClick={closeSideMenu}></div>
        </>
      ) : (
        <button className="navbar__open__menu" onClick={openSideMenu}>
          <MdKeyboardArrowLeft size="50" color="white" />
        </button>
      )}
    </>
  )
}
