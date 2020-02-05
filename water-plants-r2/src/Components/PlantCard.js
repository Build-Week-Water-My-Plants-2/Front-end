import React from "react";
import {axiosWithAuth} from "../Utilities-auth/Auth"
import {useHistory} from "react-router-dom"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


const PlantCard = props => {
  console.log(props);

  // const saveEdit = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //   .put(`/colors/${colorToEdit.id}`, editColor)
  //   .then(res => {
  //     console.log("we got the color, lets change it!",  res);
  //     updateColors(colors.map(color => (color.id === colorToEdit.id ? res.data : color))
  //      )
  //      setEditing(false)     
  //   })
  //   .catch(err => {
  //     console.log("Err");
  //   });
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  //};

  const deletePlant = () => {
    axiosWithAuth()
    .delete(`/plants/${props.plants.id}`)
    .then(res => {
      console.log("DELETED!", res);
      props.history.push("/plants")
    //   setPlants(props.plants.filter(plant => plant.id !== res.data))
    })
    .catch(err => {
     console.log("Delete Spell Missed!", err);
   });
}

  return (
    <div>
      <Card>
        <CardImg className="card-img" alt="Card image cap" />
        <CardBody>
            
          <CardTitle>Nickname: {props.plants.nickname}</CardTitle>
          <CardSubtitle>Species: {props.plants.species}</CardSubtitle>
          <CardSubtitle>
            Schedule: {props.plants.water_schedule} <br>
            </br>
            Last Watered:{props.plants.last_watered}
          </CardSubtitle>
          <CardText>Notes</CardText>

          <Button >Edit</Button>
          <Button onClick={deletePlant}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};


export default PlantCard;
