import { axiosWithAuth } from "../Utilities-auth/Auth";
import React, { useEffect } from "react";
import axios from "axios";

const Plants = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/users/")
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));

  }, []);

  return <div>HEY!</div>;
};

export default Plants;
