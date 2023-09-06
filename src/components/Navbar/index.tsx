import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useState } from 'react'

import { closeMenu, openMenu } from '../../store/reducers/navbar'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import menuOptGrid from '../../assets/images/menuOptGrid.png'
import menuOptGraph from '../../assets/images/menuOptGraph.png'
import chevronDown from '../../assets/images/chevronDown.png'

export default function Navbar() {
  const [menuDashboardOpen, setMenuDashboardOpen] = useState(false)
  const [menuProdutosOpen, setMenuProdutosOpen] = useState(false)
  const { isOpen } = useSelector((state: RootReducer) => state.navbar)

  const dispatch = useDispatch()

  const closeSideMenu = () => {
    dispatch(closeMenu())
  }

  const openSideMenu = () => {
    dispatch(openMenu())
  }

  const toggleDashboardMenu = () => {
    setMenuDashboardOpen(!menuDashboardOpen)
  }

  const toggleProdutosMenu = () => {
    setMenuProdutosOpen(!menuProdutosOpen)
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
                  to="/"
                  className="navbar__menu__list__item"
                  tabIndex={1}
                  onClick={toggleDashboardMenu}
                >
                  <img
                    className="navbar__menu__list__item__icon__img"
                    src={menuOptGrid}
                    alt="Menu option"
                  />
                  Dashboard
                  <img
                    className="navbar__menu__list__item__arrow__img"
                    src={chevronDown}
                    alt="Menu arrow"
                  />
                </Link>
                {menuDashboardOpen ? (
                  <Link
                    to="/produtos/buscarProdutos"
                    className="navbar__menu__list__item__sub"
                    tabIndex={3}
                  >
                    Buscar Produtos
                  </Link>
                ) : (
                  ''
                )}
                <Link
                  to="/produtos"
                  className="navbar__menu__list__item"
                  tabIndex={2}
                  onClick={toggleProdutosMenu}
                >
                  <img
                    className="navbar__menu__list__item__icon__img"
                    src={menuOptGraph}
                    alt="Menu option"
                  />
                  Produtos
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
