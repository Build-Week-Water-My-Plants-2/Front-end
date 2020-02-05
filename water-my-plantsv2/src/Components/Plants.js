import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Utils/axiosAuth";

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    marginTop: "1%",
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

function Plants() {
  const [plants, setPlants] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axiosWithAuth()
      .get("https://water-my-plants-2.herokuapp.com/api/plants")
      .then((res) => {
        setPlants(res.data);
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="header">
        {/* <h1 className="plant-header"> Your plants: </h1> */}
      </div>
      <div className="plant-page">
        {plants.map((item) => {
          return (
            <Card key={item.id} className={classes.root}>
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
                title={item.species}
                subheader={item.nickname}
              />
              <CardMedia
                className={classes.media}
                image={item.image_url}
                title="Your Plant"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Water Schedule: {item.water_schedule}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Last Watered: {item.last_watered}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button size="small" color="primary">
                  Delete
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export default Plants;
