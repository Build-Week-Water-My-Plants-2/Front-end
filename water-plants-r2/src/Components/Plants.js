import { axiosWithAuth } from "../Utilities-auth/Auth";
import React, { useEffect, useState } from "react";

import PlantCard from "./PlantCard";
import { PlantContext } from "../Utilities-auth/context";
import ListPlants from "./listPlants";

const Plants = (props) => {
  const [plants, setPlants] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then(res => {
        setPlants(res.data);
        console.log(res);
        // localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
  }, []);

  
  return (
    <div>
      <PlantContext.Provider value={plants}>
        <ListPlants history={props.history}/>
      </PlantContext.Provider>
    </div>
  );
};

export default Plants;
