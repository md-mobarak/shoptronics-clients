import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { createContext } from "react";
import useData from "./components/Data/useData";
import { Route, Routes, useLocation } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./components/UserProfile/UserProfile";
import Dashboard from "./components/Dashboard/Dashboard";
// ..
AOS.init();
export const cardContext = createContext();
function App() {
  const data = useData();

  return (
    <div className="">
      <Navbar></Navbar>
      <cardContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </cardContext.Provider>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
