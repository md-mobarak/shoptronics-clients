import React from "react";
import logo_1 from "../../asset/logo/BasicSel.png";
import logo_2 from "../../asset/logo/Meta.png";
import logo_3 from "../../asset/logo/IconFic.png";
import logo_4 from "../../asset/logo/LeyaK.png";
const Logo = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-3 lg:my-16">
      <div className=" shadow-xl  w-full h-[142px] flex justify-center items-center">
        <img src={logo_1} alt="" />
      </div>
      <div className="shadow-xl  w-full h-[142px] flex justify-center items-center">
        <img src={logo_2} alt="" />
      </div>
      <div className="shadow-xl  w-full h-[142px] flex justify-center items-center">
        <img src={logo_3} alt="" />
      </div>
      <div className="shadow-xl  w-full h-[142px] flex justify-center items-center">
        <img src={logo_4} alt="" />
      </div>
    </div>
  );
};

export default Logo;
