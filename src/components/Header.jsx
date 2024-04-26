import { useState } from 'react'
import './Header.css'
import { Close, Menu } from '../assets/icon/icons'
import { Facebook, Instagram, Twitter } from '../assets/icon/social'

function Header() {
  const [hasClass, setHasClass] = useState(false)

  const handleAddClass = () => {
    setHasClass(true)
  }

  const handleRemoveClass = () => {
    setHasClass(false)
  }
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            CHIPS
          </a>

          <div
            className={`nav__menu ${hasClass ? 'show-menu' : ''}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li>
                <a href="#home" className="nav__link" onClick={handleRemoveClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="#favorites" className="nav__link" onClick={handleRemoveClass}>
                  Favorites
                </a>
              </li>
              <li>
                <a href="#care" className="nav__link" onClick={handleRemoveClass}>
                  Care
                </a>
              </li>
              <li>
                <a href="#products" className="nav__link" onClick={handleRemoveClass}>
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="nav__link" onClick={handleRemoveClass}>
                  Contact
                </a>
              </li>
            </ul>
            <div
              className="nav__close"
              id="nav-close"
              onClick={handleRemoveClass}
            >
              <Close />
            </div>
            <div className="nav__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="nav__social-link"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="nav__social-link"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="nav__social-link"
              >
                <Twitter />
              </a>
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={handleAddClass}>
            <Menu />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
