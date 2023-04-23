import React, { useContext, useState, useEffect } from "react";
import { cardContext } from "../../App";
import ReactPaginate from "react-paginate";
import Card from "../Home/Card";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

const Shop = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const useCard = useContext(cardContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const itemPerPage = 6;

  //  product filter
  const handleProductFilter = (params) => {
    const filterItems = useCard.filter((p) => p.category === params);
    // console.log(filterItems);
    setSelectedOption(filterItems);
  };
  // console.log(selectedOption.length);

  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(useCard.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(useCard.length / itemPerPage));
  }, [itemOffset, itemPerPage, useCard]);

  // react pagianation style
  const paginationStyles = {
    container: "flex flex-row flex-wrap justify-center items-center mt-4",
    pageLink:
      "border rounded-full border-gray-300 py-2 px-4 mx-1 text-gray-700 hover:bg-green-300",
    activeLink:
      "border rounded-full border-green-500 py-2 px-4 mx-1 text-green-500 bg-green-100",
    disabledLink:
      "border rounded-full border-gray-300 py-2 px-4 mx-1 text-gray-500 cursor-not-allowed",
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % useCard.length;
    setItemOffset(newOffset);
  };
  let viewData;
  if (selectedOption.length === 0) {
    viewData = currentItems;
  } else if (selectedOption.length > 0) {
    viewData = selectedOption;
  }
  // console.log(viewData);
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-evenly my-12 ">
      {toggleSidebar && (
        <section
          className="w-56 border  shadow-xl  "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-center font-serif font-bold text-3xl  bg-primary text-white p-2">
            Categories
          </h3>
          <h3 className="text-center font-serif font-semibold text-2xl my-3">
            <button onClick={handleReload}> VIEW ALL</button>
          </h3>
          <div className="mt-5">
            <h4 className="text-2xl text-center font-serif font-semibold">
              Mobile
            </h4>
            <div className="flex justify-center items-center">
              <div className="font-semibold ">
                <input
                  value="mobile"
                  checked={selectedOption === "mobile"}
                  onChange={(e) => handleProductFilter(e.target.value)}
                  className=" mr-1"
                  type="radio"
                  name=""
                  id=""
                />
                <label htmlFor="">Iphone</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Samsung</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Others</label> <br />
                <input className=" mr-1" type="range" name="" id="" />
                <label className="text-center" htmlFor="">
                  Price
                </label>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h4 className="text-2xl text-center font-serif font-semibold">
              Laptop
            </h4>
            <div className="flex justify-center items-center">
              <div className="font-semibold ">
                <input
                  value="laptop"
                  checked={selectedOption === "laptop"}
                  onChange={(e) => handleProductFilter(e.target.value)}
                  className=" mr-1"
                  type="radio"
                  name=""
                  id=""
                />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Apple</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Samsung</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Asus</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">HP</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Dell</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Others</label> <br />
                <input className=" mr-1" type="range" name="" id="" />
                <label className="text-center" htmlFor="">
                  Price
                </label>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-center font-serif font-semibold">
              Watch
            </h4>
            <div className="flex justify-center items-center">
              <div className="font-semibold ">
                <input
                  value="watch"
                  checked={selectedOption === "watch"}
                  onChange={(e) => handleProductFilter(e.target.value)}
                  className=" mr-1"
                  type="radio"
                  name=""
                  id=""
                />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Apple</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Samsung</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Others</label> <br />
                <input className=" mr-1" type="range" name="" id="" />
                <label className="text-center" htmlFor="">
                  Price
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-2xl text-center font-serif font-semibold">
              Head Phone
            </h4>
            <div className="flex justify-center items-center">
              <div className="font-semibold ">
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Apple</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Samsung</label> <br />
                <input className=" mr-1" type="radio" name="" id="" />
                <label htmlFor="">Others</label> <br />
                <input className=" mr-1" type="range" name="" id="" />
                <label className="text-center" htmlFor="">
                  Price
                </label>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="flex justify-center items-center">
        <div>
          <div>
            <button onClick={() => setToggleSidebar(!toggleSidebar)}>
              {toggleSidebar ? (
                <RxCross2 className="text-red-500 w-10 h-10"></RxCross2>
              ) : (
                <div className="flex items-center justify-center">
                  {" "}
                  <TfiMenuAlt className="text-secondary  w-10 h-10 "></TfiMenuAlt>{" "}
                  <p className="text-2xl text-secondary font-serif ml-3">
                    Filter Products
                  </p>
                </div>
              )}
            </button>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className={`grid grid-cols-1 
            ${!toggleSidebar ? "lg:grid-cols-3" : "lg:grid-cols-2"} lg:gap-8`}
          >
            {viewData.map((product) => (
              <Card product={product}></Card>
            ))}

            <useCard viewData={viewData} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<div previous"
              renderOnZeroPageCount={null}
              containerClassName={paginationStyles.container}
              pageClassName={paginationStyles.pageLink}
              breakClassName={paginationStyles.pageLink}
              activeClassName={paginationStyles.activeLink}
              disabledClassName={paginationStyles.disabledLink}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
