import React,{useState} from 'react'
import Logo from '../assets/images/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Reordericon from "@material-ui/icons/Reorder"
const Navbar = () => {
    const [openLinks,setOpenLinks ]=useState(false);
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open':'close'}>
            <img src={Logo} alt='logo'/>
            <div className='hiddenLinks'>

            </div>
        </div>
        <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={toggleNavbar}>
        <Reordericon/>
        </button>
        </div>

    </div>
  )
}

export default Navbar
