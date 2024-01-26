/* CarouselCard.js */

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from '../../assets/images/c1.jpg';
import c2 from '../../assets/images/c2.jpg';
import c3 from '../../assets/images/c3.jpg';
import './index.scss'; // Import your CSS file

const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        centerMode: true,
        margin: 0,
        padding: 0,

      },
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        centerMode: true,
        margin: 0,
        padding: 0,

      },
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        centerMode: true,
        margin: 0,
        padding: 0,

      },
    }]
  };
  const carouselItems = [
    {
      imageSrc: c1,
      text: 'Ueno Park and Chidorigafuchi are particularly famous for their stunning displays.',
    },
    {
      imageSrc: c2,
      text: 'Visitors have the opportunity to witness the grandeur of the sumo wrestlers',
    },
    {
      imageSrc: c3,
      text: 'Halloween celebration at Shibuya Crossing',
    }, {
      imageSrc: c2,
      text: 'Visitors have the opportunity to witness the grandeur of the sumo wrestlers',
    }
  ];

  return (
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-item-wrapper">
          <div className="carousel-item">
            <img src={item.imageSrc} alt={`Card ${index + 1}`} className="card-image" />
            <div className="card-text-box">
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselCard;
