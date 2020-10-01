import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    cursor: "pointer",
    float: "left",
    ["@media (min-width: 576px)"]: {
      width: "100%",
      margin: 0,
      marginBottom: 20
    },
    ["@media (min-width: 768px)"]: {
      width: "40%",
      margin: 20,
    },
    ["@media (min-width: 992px)"]: {
      width: "40%",
      margin: 20,
    },
    ["@media (min-width: 1200px)"]: {
      width: "20%",
      margin: 20,
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
    backgroundColor: red[500]
  },
  cardFilmContainer: {
    ["@media (min-width: 576px)"]: {
      width: "100%"
    },
    ["@media (min-width: 768px)"]: {
      width: "30%"
    },
    ["@media (min-width: 992px)"]: {
      width: "30%"
    },
    ["@media (min-width: 1200px)"]: {
      width: "20%"
    }
  }
}));



export default function FilmCard({ filmId, image, title, description, styles }) {
  const classes = useStyles();

  const onClickCardFilm = (e) => {
    Router.push("/film/" + filmId)
  }

  return (
    <Card className={classes.root} onClick={e => onClickCardFilm(filmId)}>
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center center",
          backgroundSize: "auto 100%",
          width: "100%",
          height: 200
        }}
      ></div>
      <CardContent style={{ padding: 8 }}>
        <Typography variant="body1" color="textPrimary" component="p">
          {title}
        </Typography>
        <Typography style={{height: 60}} variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ padding: 8, height: 40 }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
