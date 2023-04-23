import React, { useContext, useEffect, useState } from "react";
import { cardContext } from "../../App";
import Card from "./Card";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [products]);
  return (
    <div className="lg:my-14 my-4">
      <h1 className="lg:text-5xl text-3xl lg:my-4">
        Best Selling <span className="font-bold font-serif">Products</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        {products?.slice(0, 3).map((product) => (
          <Card product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
