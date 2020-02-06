import React, { useState } from "react";

import axiosWithAuth from "../Utilities-auth/Auth";

// class updatePlantForm extends React.Component {

//   state = {
//     credentials: {
//      nickname: '',
//      species: '',
//      water_schedule:'',
//     }
//   };

//   handleChange = e => {

//       // [e.target.name] e.target.value

//   };

//   handleSubmit = e => {
//     axiosWithAuth
//       .put(`/users/1/plants`, edit)
//       .then(res => {

//       })
//       .catch(err => console.log(err));
//     e.preventDefault();
//   };

//   render(){

//     return (
//       <form onSubmit={handleSubmit}>
//       <input name="nickname" value={edit.nickname} onChange={handleChange} />
//       <input name="species" value={edit.species} onChange={handleChange} />
//       <input name="watering" value={edit.watering} onChange={handleChange} />
//       <button>Submit</button>
//     </form>
//   );
// }
// };

const UpdatePlantForm = ({
  history,
  match: {
    
    params: { id }
  }
}) => {
  const [nickname, setNickname] = useState("");
  const [species, setSpecies] = useState("");
  const [waterSchedule, setWaterSchedule] = useState("");

  const handleSubmit = e => {
    console.log(id);
    e.preventDefault();
    console.log(nickname, species, waterSchedule, "HEEEEEY");
    const newPlantData = {
      nickname,
      species,
      water_schedule: waterSchedule
    };
    axiosWithAuth()
      .put(`/plants/${id}`, newPlantData)
      .then(res => {
        console.log(res);
       history.push("/users/1/plants")
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="nickname"
          value={nickname}
          onChange={e => {
            setNickname(e.target.value);
          }}
        />
        <input
          name="species"
          value={species}
          onChange={e => {
            setSpecies(e.target.value);
          }}
        />
        <input
          name="watering"
          value={waterSchedule}
          onChange={e => {
            setWaterSchedule(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default UpdatePlantForm;
