import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/components/infoStyle.js";
import Paginations from "components/Pagination/Pagination.js";

const useStyles = makeStyles(styles);

import { container, title } from "assets/jss/nextjs-material-kit.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

const typographyStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "0",
    marginBottom: "40px",
    position: "relative",
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "25px",
    color: "white"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  topFilmContainer: {
    ["@media (min-width: 576px)"]: {
      width: "100%",
      height: 3040
    },
    ["@media (min-width: 768px)"]: {
      width: "40%",
      height: 1680
    },
    ["@media (min-width: 992px)"]: {
      width: "40%",
      height: 1680
    },
    ["@media (min-width: 1200px)"]: {
      width: "20%",
      height: 920
    }
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  ...imagesStyles
};

const useTypoStyles = makeStyles(typographyStyle);

export default function TopFilm(props) {
  const classes = useTypoStyles();
  const { title, cardFilms } = props;
  return (
    <div
      className={classes.topFilmContainer}
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        padding: 20,
        backgroundColor: "#333"
      }}
    >
      <div className={classes.typo}>
        <div>{title}</div>
      </div>
      {cardFilms}
      <div
        style={{
          height: 60,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paginations
          pages={[
            { text: "PREV" },
            { text: 1 },
            { text: 2 },
            { active: true, text: 3 },
            { text: 4 },
            { text: 5 },
            { text: "NEXT" }
          ]}
          color="info"
        />
      </div>
    </div>
  );
}
