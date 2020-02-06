import React from "react";
import axiosWithAuth from "../Utilities-auth/Auth";
import { makeStyles } from "@material-ui/core/styles";
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
import "./PlantCard2.css";
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    marginBottom: "20px",
    marginRight: '25%',
    backgroundColor: "rgba(211, 211, 211, 0.727)"
  },
  media: {
    height: "50px",
    width: "140px",
    marginLeft: '25%',
    
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
      console.log("DELETED!", res); 

    axiosWithAuth()
    .get(`/users/${props.id}/plants`)
    .then(res => {
      props.setPlants(res.data);
      console.log(res);
    })
    .catch(err => console.log(err));




    })
    .catch(err => {
     console.log("Delete Spell Missed!", err);
   });
}
  
  const classes = useStyles();
  
  return (
   
    <div className="plant-container" >
     
      <div className="plant-page">
        {/* {plants.map((item) => { */}
        <Card key={props.plants.id} className={classes.root} className="plant-card" style={{backgroundColor: 'lightblue'}}>
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
            <Button onClick={deletePlant} size="small" color="inherit">
              Delete
            </Button>
            <Button href={`/update-plant/${props.plants.id}`} size="small" color="inherit">
              Edit
            </Button>
          </CardActions>
        </Card>
      </div>
      </div>
   
  );
}
export default PlantCard2;
