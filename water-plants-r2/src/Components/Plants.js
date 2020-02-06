import  axiosWithAuth  from "../Utilities-auth/Auth";
import React, { useEffect, useState } from "react";
import PlantForm from "./PlantForm";
import { UserContext } from "../Utilities-auth/context";
import { PlantContext } from "../Utilities-auth/context";
import ListPlants from "./listPlants";
import {useParams} from 'react-router-dom'

const Plants = (props) => {
  const {id} = useParams();
  const [plants, setPlants] = useState();
  const [users, setUsers] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}/plants`)
      .then(res => {
        setPlants(res.data);
        console.log(res);
        // localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        setUsers(res.data);
        console.log('from the useeffect', res);
         localStorage.setItem("users", res.data);
      })
      .catch(err => console.log(err));
  }, []);

 
  return (
    <>
    <div>
      <PlantContext.Provider value={plants}>
        <ListPlants setPlants={setPlants} id={id} history={props.history}/>
        
      </PlantContext.Provider>
    </div>
    <div>
       <UserContext.Provider value={users}>
        <PlantForm />
        
      </UserContext.Provider>
    </div>
    </>
  );

};

export default Plants;
