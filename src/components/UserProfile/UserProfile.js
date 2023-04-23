import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const UserProfile = () => {
  const [user, error, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  //   console.log(user);
  return (
    <div className="font-serif lg:my-12 my-5">
      <h1 class="text-4xl text-center my-4 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        MY PROFILE
      </h1>

      <section className="flex justify-center items-center px-20">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full">
          <div class="bg-gradient-to-r from-green-400 to-yellow-500 text-white px-6 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-12 w-12 rounded-full object-cover mr-2"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://randomuser.me/api/portraits/men/32.jpg"
                  }
                  alt="Profile image"
                />
                <div>
                  <h3 class="text-lg font-semibold">{user?.displayName}</h3>
                  <p class="text-sm">{user?.email}</p>
                </div>
              </div>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-white mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <span class="text-sm">Edit Profile</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center px-6 py-4">
            <img
              class="h-40 w-40 rounded-full object-cover border-4 border-white shadow-lg"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://randomuser.me/api/portraits/men/32.jpg"
              }
              alt="Profile image"
            />
          </div>
          <div class="px-6 py-4">
            <h4 class="text-lg font-semibold mb-2">Address:</h4>
            <p class="text-gray-700 leading-7">123 Main St, Anytown, USA</p>
          </div>
        </div>
      </section>
      {/* <section className="flex my-5 justify-center items-start">
        <div className="border-3 lg:w-[700px] h-[400px] border-primary bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-white shadow-2xl rounded-xl">
          <h1 className="text-2xl   my-4 font-bold text-white text-center">
            NAME: {user?.displayName}
          </h1>
        </div>
      </section> */}
    </div>
  );
};

export default UserProfile;
