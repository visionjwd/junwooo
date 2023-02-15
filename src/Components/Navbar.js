import React,{ useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../Assets/junwoologowhite.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Reorder } from '@mui/icons-material';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    
  return (
    
    <div className = "navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to='/'>
          <img src={Logo}/>
        </Link>
        <div className="hiddenLinks">
        <Link to="/" onClick={toggleNavbar}> Home </Link>
        <Link to="/about" onClick={toggleNavbar}> About </Link>
        <Link to="/projects" onClick={toggleNavbar}> Projects </Link>
        <HashLink to="#contacts" smooth onClick={toggleNavbar}> Contact </HashLink>
        </div>
        </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <HashLink to="#contacts" smooth> Contact </HashLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
          </button>
        </div>
    </div>
    
  )
}

export default Navbar

