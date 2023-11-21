import React from 'react'

const Collection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6}=props.gentsFashion;


  return (
    <div className='collectionsection'>
       <marquee><h2>{title}</h2></marquee>
        <div className="men-images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
    </div>
  )
}

export default Collection