import React from 'react'
import { FaPersonWalkingArrowRight } from "react-icons/fa6";


const TopWaterfalls = () => {
    const { inputComp } = useContext(MyContext);
        const{buttonComp}=useContext(MyContext);
    const images = [
        { srce: image1,name:"Kutralam Water Falls"},
        { srce: image2,name:"Anaimalai Tiger Reserve"},
        { srce: image3,name:"Gulf of Mannar Marine National Park"},
        { srce: image4,name:"Mayura Thotam"},
      ];
  return (
    <div>
      {inputComp}
                  <div className='tenhills'>
                    <img src={image11} alt='Top Hills' />
                    <div className='tenhille'>
                      <h3>Hills</h3>
                    </div>
                  </div>
                  <div className='flexcontainer'>
                    {images.map((item, i) => (
                      <div className='carde' key={i}>
                        <img src={item.srce} alt={`Hill ${i + 1}`} />
                        <div className='contents' key={i}>
                         <p> {item.name}</p>
                          <h4>Read More<FaPersonWalkingArrowRight className='iconhill'/></h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>{buttonComp}</div>
    </div>
  )
}

export default TopWaterfalls
