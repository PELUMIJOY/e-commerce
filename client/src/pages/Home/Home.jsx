import React from 'react'
import Slider from '../../Component/Slider/Slider'
import FeatureProducts from '../../Component/FeatureProducts/FeatureProducts'
import "./Home.scss"
import Categories from '../../Component/Categories/Categories'
import Contact from '../../Component/Contact/Contact'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeatureProducts type='featured'/>
      <Categories/>
      <FeatureProducts type='trending'/>
      <Contact/>
    </div>
  )
}

export default Home