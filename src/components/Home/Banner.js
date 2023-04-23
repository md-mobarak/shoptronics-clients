import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.css";
import { RxCross1 } from "react-icons/rx";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img
            className="w-full lg:h-[600px] h-full"
            src="https://www.rollingstone.com/wp-content/uploads/2022/03/urbanista-los-angeles.jpeg?w=1581&h=1054&crop=1"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className="w-full lg:h-[600px] h-full"
            src="https://waltonbd.com/image/catalog/category-banner/mobile/hm7-block.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full lg:h-[600px] h-full"
            src="https://www.cnet.com/a/img/resize/b9e66585cdf259a71344fddc53b04339e4e162fb/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200"
            alt=""
          />
          {/* <div className="relative">
            <button className="btn btn-primary w-40 h-20 absolute bottom-3 left-[500px]">
              Get Started
            </button>
          </div> */}
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
