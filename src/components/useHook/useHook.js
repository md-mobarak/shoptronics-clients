import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useHook = (user) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  //   console.log(user);
  useEffect(() => {
    const email = user?.user?.email;
    const currentUsers = { email: email };
    if (email) {
      fetch(`http://localhost:4000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUsers),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.status === "success") {
            toast.success("You are welcome our website");
            navigate("/");
          }
          //   const accessToken = data.token;
          //   localStorage.setItem("accessToken", accessToken);
          //   setToken(accessToken);
        });
    }

    console.log("users token", user);
  }, [user]);
  return [token];
};

export default useHook;
