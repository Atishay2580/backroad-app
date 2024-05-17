import React from 'react'
import { MenuItem, socialMediaIcons } from '../data'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return <>
    
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
            {/* html ke andar js use karne ke liye curly braces use karte hain */}
            {
                MenuItem.map((menu)=>(
                    <li>
                        <a href="{menu.link}" className="nav-link">
                            {menu.name}
                        </a>
                    </li>
                ))
            }
        </ul>

        <ul className="nav-icons">
          {
            socialMediaIcons.map(
              (item) => (
                <li>
                <a href={item.link} target="_blank" className="nav-icon"
                  ><i className={item.icon}></i
                ></a>
                </li>
              )
            )
          }
        </ul>
      </div>
    </nav>
  
  </>
}

export default Navbar