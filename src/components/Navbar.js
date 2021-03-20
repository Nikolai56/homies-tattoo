import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="logo" src="/img/homiesLogo-sm.png" alt="Homies Tattoo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center lead" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link smooth-scroll" to="/">Главная</Link></li>
              <li className="nav-item"><Link className="nav-link smooth-scroll" to="/about-us">О нас</Link></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="portfolio.html">Портфолио</a></li>
              <li className="nav-item active"><a className="nav-link smooth-scroll" href="blog/">Блог</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="obuchenie.html">Обучение</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="faq.html">FAQ</a></li>
              <li className="nav-item last"><a className="nav-link smooth-scroll" href="contacts.html">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
