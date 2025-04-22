import React, { useContext } from 'react'
import './Userreview.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Userreview = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div className='courasel'>
      <Carousel responsive={responsive}>
    <div className='rohit'>
      <p>"The sunrise and sunset views are breathtaking! Watching the sun meet the sea was a magical experience."</p>
      <hr></hr>
      <p>– Rohit, Mumbai</p>
    </div>
    <div className='rohit'>
    <p>"Great spot for photography! Every corner has something beautiful to capture."</p>
    <hr></hr>
    <p>– Karan, Bengaluru</p>
    </div>
    <div className='rohit'>
    <p>"Nice beaches and friendly locals. Perfect for a relaxing walk and some tasty street food."</p>
      <hr></hr>
      <p>–Patel,Pune</p>
    </div>
    <div className='rohit'>
    <p>"Loved the spiritual vibe at Vivekananda Rock and the temple. Peaceful and powerful place!"</p>
      <hr></hr>
      <p>–Jhon,Italy</p>
    </div>
</Carousel>
</div>
    </>
  )
}

export default Userreview
