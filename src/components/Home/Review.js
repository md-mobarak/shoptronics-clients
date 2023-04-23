import React from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";

const Review = () => {
  return (
    <div className=" overflow-x-hidden">
      <h1 className="lg:text-6xl text-xl lg:my-3 text-center text-secondary font-bold font-serif">
        REVIEW
      </h1>
      <div className="">
        <section className="lg:flex justify-center items-center py-6 ">
          <img
            className=" mb-4 lg:mb-0 lg:mr-[-30px] lg:w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=sph"
          />
          <div className="border-r-4 border-green-500 hidden mb-[-20px] lg:block w-3 relative h-[600px]">
            <svg
              className="w-10 h-10 text-green-500 absolute top-72 fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute mt-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute bottom-0 mb-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
          </div>
          <div className="px-12" data-aos-duration="3000" data-aos="fade-left">
            <h3 className="text-center  font-serif font-semibold text-3xl">
              TOMAS
            </h3>

            <p className="text-justify font-serif text-xl">
              The Nike Air Zoom Pegasus 38 is a great pair of running shoes!
              They're comfortable, supportive, and provide excellent cushioning
              for my feet. They also have good traction and look stylish. Highly
              recommend for anyone looking for a reliable running shoe.
            </p>
          </div>
        </section>

        {/* 2nd section  */}
        <section className="lg:flex justify-center items-center py-6 ">
          <div className="px-12" data-aos="fade-right" data-aos-duration="2000">
            <h3 className="text-center  font-serif font-semibold text-3xl">
              JULIE
            </h3>

            <p className="text-justify font-serif text-xl">
              The Sonos One is an amazing smart speaker that delivers great
              sound quality and integrates seamlessly with my smart home system.
              The Alexa voice controls work flawlessly, and the set-up was a
              breeze. I'm really happy with my purchase!
            </p>
          </div>
          <div className="border-r-4 border-green-500 hidden mb-[-20px] lg:block w-3 relative h-[600px]">
            <svg
              className="w-10 h-10 text-green-500 absolute top-72 -right-1 fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute mt-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute bottom-0 mb-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
          </div>

          <img
            className=" mb-4 lg:mb-0 w-full "
            data-aos="fade-left"
            data-aos-duration="3000"
            src="https://img.freepik.com/premium-photo/picture-attractive-businesswoman-pointing-her-finger_380164-11174.jpg?size=626&ext=jpg&ga=GA1.2.832354014.1675511612&semt=ais"
          />
        </section>

        {/* 3rd section  */}
        <section className="lg:flex justify-center items-center py-6 ">
          <img
            className=" mb-4 lg:mb-0 lg:w-[600px] "
            data-aos="fade-right"
            data-aos-duration="2000"
            src="https://img.freepik.com/premium-photo/attractive-guy-shirt-isolated-white-background_185193-72733.jpg?w=740"
          />
          <div className="border-r-4 border-green-500 hidden lg:block w-3 relative h-[600px]">
            <svg
              className="w-10 h-10 text-green-500 absolute top-72 fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute mt-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
            <svg
              className="w-14 h-14 text-green-500 absolute bottom-0 mb-[-10px] ml-[-23px] fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>
          </div>
          <div className="px-12" data-aos="fade-left" data-aos-duration="3000">
            <h3 className="text-center  font-serif font-semibold text-3xl">
              TOMAS
            </h3>

            <p className="text-justify font-serif text-xl">
              The Garmin Forerunner 945 is a fantastic smartwatch for athletes
              and fitness enthusiasts. It tracks all of my workouts and provides
              accurate heart rate monitoring, GPS tracking, and training plans.
              The battery life is impressive, and it syncs seamlessly with my
              phone. Highly recommend!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
