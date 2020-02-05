import React, { useState } from "react";

import { axiosWithAuth } from "../Utilities-auth/Auth";
const initialState = {
  nickname: "",
  species: "",
  water_schedule: ""
};

const PlantForm = (props) => {
  const [newPlant, setNewPlant] = useState(initialState);
  // console.log(newPlant);
  // const id = props.match.params.id


  const handleChange = event => {
    event.preventDefault()
    // console.log("changes were handled");
    setNewPlant({ ...newPlant, [event.target.name]: event.target.value });
  }
    const addPlant = e => {
      // ADD PLANT
     

      axiosWithAuth()
        .post(`user/1/plants`, newPlant)
        .then(res => {
          // console.log(res);
          setNewPlant(res.data);
          // this.props.history.push("/plants");
        })
        .catch(err => console.log(err));
    };
    const handleSubmit = e => {
      e.preventDefault()
      addPlant(newPlant)
      // props.history.push("/plants")
    }

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nickname: </label>
          <input
            type="text"
            placeholder="plant name"
            name="nickname"
            value={newPlant.nickname}
            onChange={handleChange}
          />
          <label>Plant Species: </label>
          <input
            type="text"
            name="species"
            placeholder="plant species"
            value={newPlant.species}
            onChange={handleChange}
          />
          <label>Watering Schedule: </label>
          <input
            type="text"
            placeholder="enter watering days"
            name="water_schedule"
            value={newPlant.water_schedule}
            onChange={handleChange}
          />

          <button type="submit">Update Movie Info</button>
        </form>
      </div>
    );
  
};
export default PlantForm;
