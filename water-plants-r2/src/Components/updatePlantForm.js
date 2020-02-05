import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { axiosWithAuth } from "../Utilities-auth/Auth";
const PlantForm = () => {


  // updatePlant = e => {
  //   // UPDATE AXIOS
  //   e.preventDefault();

  //   axiosWithAuth()
  //     .put(`/plants/${props.plants.id}`)
  //     .then(res => {
  //       localStorage.setItem("token", res.data.);
  //       this.props.history.push("/protected");
  //     })
  //     .catch(err => console.log(err));
  // };

  
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
  }

export default PlantForm;
