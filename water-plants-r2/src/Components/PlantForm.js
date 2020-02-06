import React, { useContext,  useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Utilities-auth/context"
import axiosWithAuth from "../Utilities-auth/Auth";

const PlantForm = ({
  history
}) => {
  const userPlant = useContext(UserContext);
  console.log(userPlant);
  // console.log('from PlantForm',props.value)
  const [add, setAdd] = useState({
    nickname: "",
    species: "",
    water_schedule: ""
  });
  // const id = props.match.params.id
  const handleChange = e => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value
    });
    console.log(add);
  };

  const addPlant = () => {
    axiosWithAuth()
      .post(`/users/1/plants`, add)
      .then(res => {
        // console.log(res);
        setAdd(res.data);
        
      })
      .catch(err => console.log(err));
  };

  

  const handleSubmit = e => {
    e.preventDefault();
    addPlant(add);
    history.push("/users/1/plants");
  };

  return (
    <form onSubmit={handleSubmit}>
      Nickname:{" "}
      <input name="nickname" value={add.nickname} onChange={handleChange} />
      Species:{" "}
      <input name="species" value={add.species} onChange={handleChange} />
      Watering Schedule:{" "}
      <input
        name="water_schedule"
        value={add.water_schedule}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default PlantForm;
