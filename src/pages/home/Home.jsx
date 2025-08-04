import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Carousel from '../../components/carousel/Carousel';
import Intro from '../../components/intro/Intro';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';

const Home = () => {
     const navigate = useNavigate();

  return (
    <div>
      <Carousel/>
      <Intro/>
      <Category/>
    </div>
  )
}

export default Home