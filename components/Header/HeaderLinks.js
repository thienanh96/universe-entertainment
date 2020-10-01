/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import { Apps, CloudDownload, Router } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { route } from "next/dist/next-server/server/router";
import Router from "next/router";

const useStyles = makeStyles(styles);

export default function HeaderLinks({
  onClickJavCensor,
  onClickJavUncensor,
  onClickChina,
  onClickAE
}) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={(e) => onClickJavCensor()}
        >
          <div
            style={{
              textShadow: "-3px -3px 2px rgba(150, 150, 150, 1)"
            }}
          >
            JAV Censored
          </div>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={(e) => onClickJavUncensor()}
        >
          <div
            style={{
              textShadow: "-3px -3px 2px rgba(150, 150, 150, 1)"
            }}
          >
            JAV Uncensored
          </div>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={(e) => onClickChina()}
        >
          <div
            style={{
              textShadow: "-3px -3px 2px rgba(150, 150, 150, 1)"
            }}
          >
            China
          </div>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={(e) => onClickAE()}
        >
          <div
            style={{
              textShadow: "-3px -3px 2px rgba(150, 150, 150, 1)"
            }}
          >
            America/Europe
          </div>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <div style={{ float: "left", marginTop: 14 }}>Hi, Thien Anh</div>
        <CustomDropdown
          left
          caret={false}
          hoverColor="black"
          dropdownHeader="Dropdown Header"
          buttonText={
            <img src={profileImage} className={classes.img} alt="profile" />
          }
          buttonProps={{
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent"
          }}
          dropdownList={["Me", "Settings and other stuff", "Sign out"]}
        />
      </ListItem>
    </List>
  );
}
