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
class PlantForm extends React.Component {

  addPlant = e => {
    e.preventDefault();
  
    axiosWithAuth
      .post('/plants')
      .then(res => {
        
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };


render(){

  return (
    <Form>
      <FormGroup row>
        <Label for="nickname" sm={2}>
          Plant Nickname
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="plantname"
            id="plantname"
            placeholder="add new plant name"
            />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="species" sm={2}>
          Plant Species
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="species"
            id="plantname"
            placeholder="add new species"
            />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Watering
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Every Day</option>
            <option>Every 2 Days</option>
            <option>Every 3 Days</option>
            <option>Every 4 Days</option>
            <option>Every 5 Days</option>
            <option>Every 6 Days</option>
            <option>Every 7 Days</option>
            <option>Every 8 Days</option>
            <option>Every 9 Days</option>
            <option>Every 10 Days</option>
            <option>Every 11 Days</option>
            <option>Every 12 Days</option>
            <option>Every 13 Days</option>
            <option>Every 14 Days</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Time
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>12 AM</option>
            <option> 1 AM</option>
            <option>2 AM</option>
            <option>3 AM</option>
            <option>4 AM</option>
            <option>5 AM</option>
            <option>6 AM</option>
            <option>7 AM</option>
            <option>8 AM</option>
            <option>9 AM</option>
            <option>10 AM</option>
            <option>11 AM</option>
            <option>12 PM</option>
            <option>1 PM</option>
            <option>2 PM</option>
            <option>3 PM</option>
            <option>4 PM</option>
            <option>5 PM</option>
            <option>6 PM</option>
            <option>7 PM</option>
            <option>8 PM</option>
            <option>9 PM</option>
            <option>10 PM</option>
            <option>11 PM</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Notes
        </Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
};
export default PlantForm;
