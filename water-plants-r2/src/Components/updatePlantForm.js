import React, { useState } from "react";
import axiosWithAuth from "../Utilities-auth/Auth";
import {LogForm, 
  UserForm, 
  Input, 
  Button,
  IconDiv,
  Title,
  Title2,
  Label,
  EmailWrapper,
  PasswordWrapper,
  MemberLink,
  Anchor} from "../styles/LoginStyles";
 import "./UpdatePlant.css"

const UpdatePlantForm = ({  history,
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
        history.push("/users/1/plants");
      })
      .catch(err => console.log(err));
  };

  return (
    <UserForm className="update">
    <Title>Update Plant</Title>
      <LogForm onSubmit={handleSubmit}>
      <Label htmlFor="nickname" >Nickname: </Label>
      <EmailWrapper>
       <Input
          id="nickname"
          name="nickname"
          value={nickname}
          onChange={e => {
            setNickname(e.target.value);
          }}
        />
        </EmailWrapper>
        <Label htmlFor="species">Species: </Label>
        <EmailWrapper>
        <Input
          id="species"
          name="species"
          value={species}
          onChange={e => {
            setSpecies(e.target.value);
          }}
        />
        </EmailWrapper>
        <Label htmlFor="watering" >Watering Schedule: YYYY-MM-DD HH:MM </Label>
        <EmailWrapper>
        <Input
          id="watering"
          name="watering"
          value={waterSchedule}
          onChange={e => {
            setWaterSchedule(e.target.value);
          }}
        />
        </EmailWrapper>
        <Button>Submit</Button>
      </LogForm>
    </UserForm>
  )
};
export default UpdatePlantForm;
