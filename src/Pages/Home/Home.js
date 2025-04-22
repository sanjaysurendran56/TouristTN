import React from 'react'
import Toplaces from '../../Components/Toplaces/Toplaces'
import Review from '../../Components/Review/Review'
import ImageSlider from '../../Components/Heritage/Heritage'
import Blogs from '../../Components/Blogs/Blogs'
import { FaRecordVinyl } from 'react-icons/fa6'
import Loations from '../../Components/Locations/Loations'
import Inspiration from '../../Components/Inspiration/Inspiration'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Last from '../../Components/Last/Last'
const Home = () => {
  return (
    <div>
      <Toplaces />
      <Review />
      <ImageSlider />
      <Blogs />
      <Loations />
      <Inspiration />
      <Subscribe />
      <Last />
    </div>
  )
}
export default Home
