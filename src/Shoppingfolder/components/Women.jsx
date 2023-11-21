import React from "react";

const Women = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =props.ladiesfashion;
  return (
    <div className="womenSection">
      <marquee direction="right">
        <h2>{title}</h2>
        </marquee>
        <div className="bannerbox">
            <img src="assets/LadiesBanner.gif" alt="" />
        </div>
      
      <div className="women-images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>
  );
};

export default Women;
