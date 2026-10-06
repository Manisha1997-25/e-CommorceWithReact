import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { ThemeContext } from '../theme/ThemeProvider';
import { IoSunny, IoSunnyOutline } from 'react-icons/io5';



const Navbar = ({ loggedUser, setLoggedUser, searchTitle, handleSearch, category, handleFilterCategory, categories, state }) => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  function handleLogout() {
    setLoggedUser('')
    navigate('/')
  }


  return (
    <nav className={`navbar navbar-expand-lg 
                ${theme== 'light' ? 'bg-body-tertiary' : 'bg-dark'}`} 
              data-bs-theme={`${theme == 'light' ? '' : 'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E-Commorce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Cart</a>
            </li>
          </ul>
          <div className='d-flex gap-2 me-3'>
            {/* Search */}
            <input
              type="text"
              className="form-control searchBox"
              placeholder="Search products..."
              value={searchTitle}
              onChange={handleSearch}
            />

            {/* Category */}
            <select
              className="form-select"
              value={category}
              onChange={handleFilterCategory}
            >
              <option value="">All Categories</option>

              {categories?.map((c, i) => (
                <option value={c} key={i}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex align-items-center" role="search">
            <button className='themeButton' onClick={toggleTheme}>
              {theme == 'light' ? <IoSunnyOutline /> : <IoSunny />}
            </button>
            <Link to='/cart' className='bagIcon'>
            <FaShoppingBag />
            {state && state.cartLength > 0 &&(
            <sup className='cartBadge'>
              {state.cartLength}
              </sup>
            )}
            </Link>
            
            <FaUser  className='userIcon'/><span className=" userName ps-2">{loggedUser && loggedUser.name}</span>
            <button className='btn ms-2' style={{backgroundColor:" #cf86cc"}} onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar