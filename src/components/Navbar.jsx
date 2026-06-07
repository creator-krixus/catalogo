import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__badge">
        ✨ Fashion
      </span>

      <div className="nav-links">
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/products">Products</Link> */}
        {/* <Link to="/about">About</Link> */}
      </div>
    </nav>
  )
}