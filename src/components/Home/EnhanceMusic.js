import React, { useContext } from "react";
import image from "../../asset/CardImage/poster-03 1.png";
const EnhanceMusic = () => {
  return (
    <div className="lg:flex bg-[#F9F3F0] justify-evenly items-center lg:border border-green-500 py-10 rounded-xl">
      <section>
        <h1 className="lg:text-5xl text-center  text-2xl font-serif lg:font-bold">
          Enhance Your <br /> Music Experience
        </h1>
        <div className="flex justify-center">
          <button className="btn btn-primary my-3 lg:my-8 text-white font-serif">
            Check it Out
          </button>
        </div>
      </section>
      <section className="flex justify-center">
        <img className="lg:w-full w-auto" src={image} alt="" />
      </section>
    </div>
  );
};

export default EnhanceMusic;
