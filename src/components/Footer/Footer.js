import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F9F3F0] font-serif ">
      <footer className="grid lg:grid-cols-4 grid-cols-1 gap-x-5 px-[100px] pt-[90px]">
        <div>
          <h1 className="text-3xl text-primary">
            Shop<span className="font-semibold">tronics</span>
          </h1>
          <p className="mt-[17px]">
            Elegant pink origami design three dimensional view and decoration
            co-exist. Great for adding a decorative touch to any room’s decor.
          </p>
        </div>
        <div>
          <h3 className="text-primary font-semibold">Information</h3>
          <p className="mt-[17px]">
            Custom Service FAQs Ordering Tracking Contacts Events
          </p>
        </div>
        <div>
          <h3 className="text-primary font-semibold">My Account</h3>
          <p className="mt-[17px]">
            Delivery Information Privacy Policy Discount Custom Service Terms &
            Condition
          </p>
        </div>
        <div>
          <h3 className="text-primary font-semibold">Get Newsletter</h3>
          <p className="mt-[17px]">
            Get on the list and get 10% off your first order!
          </p>
          <p className="my-[17px]">Your Email</p>
          <button className="btn btn-primary text-white">Subscribe Now</button>
        </div>
      </footer>
      <div className="text-center pb-4">
        <small className="font-bold px-[100px] text-[#808080]">
          Copyright 2022 ©Ninja. All rights reserved. Powered by Ninja.
        </small>
      </div>
    </div>
  );
};

export default Footer;
