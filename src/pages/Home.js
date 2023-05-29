import React from 'react'
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/images/pizza.jpeg'
const Home = () => {
  return (
    <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer' >
    <h1>Pizza</h1>
    <p> PIZZA TO FIT ANY TASTE</p>
    <Link to="/menu">
    <button>Order Now</button>
    </Link>
    </div>
    </div>
  )
}

export default Home
