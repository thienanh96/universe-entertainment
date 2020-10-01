import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
// *snip*

import { container, title } from "assets/jss/nextjs-material-kit.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const style = {
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
  searchBar: {
    ["@media (min-width: 768px)"]: {
      width: "100%"
    },
    ["@media (min-width: 992px)"]: {
      width: "60%"
    },
    ["@media (min-width: 1200px)"]: {
      width: "60%"
    }
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

const useStyles = makeStyles(style);

export default function SearchSection({
  onRequestSearch,
  title = "Search video name or JAV babies"
}) {
  const [searchValue, setSearchValue] = useState(null);
  const classes = useStyles();
  return (
    <div
      className={classes.topFilmContainer}
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        height: 200,
        padding: 20,
        backgroundColor: "#333"
      }}
    >
      <div className={classes.typo}>
        <div>{title}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <SearchBar
          onCancelSearch={() => onRequestSearch(searchValue)}
          closeIcon={<SearchIcon  />}
          cancelOnEscape={false}
          className={classes.searchBar}
          value={searchValue}
          placeholder="Search your porn videos..."
          onChange={(newValue) => setSearchValue(newValue)}
          onRequestSearch={() => onRequestSearch(searchValue)}
        />
      </div>
    </div>
  );
}
