import React, { useContext,  useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Utilities-auth/context"
import axiosWithAuth from "../Utilities-auth/Auth";
import "./PlantForm.css";

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
  Anchor} from "../styles/LoginStyles"

const PlantForm = (
  {history}
) => {
  
  const [add, setAdd] = useState({
    nickname: "",
    species: "",
    water_schedule: ""
  });
  
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
        setAdd(res.data);
        history.push("/users/1/plants");
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPlant(add);
   
  };

  return (
    <UserForm className='plant-form'>
    <Title>New Plant</Title>
    <LogForm onSubmit={handleSubmit}>
    <Label htmlFor="nickname">Nickname: </Label>
      <EmailWrapper>
      <Input id="nickname" name="nickname" value={add.nickname} onChange={handleChange} />
      </EmailWrapper>
      <Label htmlFor="species">Species: </Label>
      <EmailWrapper>
      <Input name="species" value={add.species} onChange={handleChange} />
      </EmailWrapper>
      <Label htmlFor="watering">Watering Schedule: </Label>
      <EmailWrapper>
      <Input
        id="watering"
        name="water_schedule"
        value={add.water_schedule}
        onChange={handleChange}
      />
      </EmailWrapper>
      <Button>Submit</Button>
    </LogForm>
    </UserForm>
  );
};

export default PlantForm;
