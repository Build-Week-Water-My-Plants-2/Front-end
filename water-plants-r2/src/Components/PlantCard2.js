import React from "react";
import axiosWithAuth from "../Utilities-auth/Auth";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    marginBottom: "20px",
    backgroundColor: "rgba(211, 211, 211, 0.727)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "white"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "green"
  }
}));
function PlantCard2(props) {
  console.log(props);
  console.log('plantcard', props)
  const deletePlant = () => {
    axiosWithAuth()
    .delete(`/plants/${props.plants.id}`)
    .then(res => {
      console.log("DELETED!", res); // needs refresh to see visual deletion. 
      // props.history.push("/plants")
    //   setPlants(props.plants.filter(plant => plant.id !== res.data))


    //maybe switch props with useContext pass down id and setPlants
    axiosWithAuth()
    .get(`/users/${props.id}/plants`)
    .then(res => {
      props.setPlants(res.data);
      console.log(res);
      // localStorage.setItem("token", res.data.token);
    })
    .catch(err => console.log(err));




    })
    .catch(err => {
     console.log("Delete Spell Missed!", err);
   });
}
  
  const classes = useStyles();
  
  return (
    <>
      <div className="header">
        {/* <h1 className="plant-header"> Your plants: </h1> */}
      </div>
      <div className="plant-page">
        {/* {plants.map((item) => { */}
        <Card key={props.plants.id} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                P
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.plants.species}
            subheader={props.plants.nickname}
          />
          <CardMedia
            className={classes.media}
            image={props.plants.image_url}
            title="Your Plant"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Water Schedule: {props.plants.water_schedule}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Last Watered: {props.plants.last_watered}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button onClick={deletePlant} size="small" color="primary">
              Delete
            </Button>
            <Button href={`/update-plant/${props.plants.id}`} size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
export default PlantCard2;
