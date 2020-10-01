import React, { useState, useEffect, useRef } from "react";
import videojs from "video.js";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "components/Badge/Badge.js";

import "./styles.css";

const typographyStyle = {
  typo: {
    paddingLeft: "0",
    marginBottom: "30px",
    marginTop: "30px",
    position: "relative",
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "25px",
    fontWeight: 600
  },
  note: {
    paddingLeft: "0",
    marginBottom: "30px",
    marginTop: "30px",
    position: "relative",
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "18px",
    fontWeight: 400
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
};

const useTypoStyles = makeStyles(typographyStyle);

const ListTags = ({ tags }) => {
  const colors = ["primary", "info", "success", "warning", "danger", "rose"];
  return (
    <div>
      {tags.length
        ? tags.map((tag, index) => {
            return <Badge color={colors[colors.length % index]}>{tag}</Badge>;
          })
        : null}
    </div>
  );
};

const InteractionSection = ({
  likeCount = 10,
  viewCount = 1000,
  onClickLove
}) => {
  const [loved, setLoves] = useState(false);
  const handleClickLove = () => {
    setLoves(!loved);
    onClickLove(!loved);
  };
  return (
    <div style={{ height: 30 }}>
      <div style={{ float: "left" }}>{likeCount}</div>
      {"  "}
      <VisibilityIcon
        style={{
          fontSize: 15,
          marginRight: 20,
          marginTop: 4,
          marginLeft: 4,
          float: "left"
        }}
      />
      <div style={{ float: "left" }}>{viewCount}</div>
      {"  "}
      <FavoriteIcon
        style={{ fontSize: 15, marginTop: 4, marginLeft: 4, float: "left" }}
      />
      <div
        style={{ float: "right", display: "inline-block", cursor: "pointer" }}
        onClick={handleClickLove}
      >
        <div style={{ float: "left" }}>Love this</div>
        <FavoriteIcon
          style={{
            float: "left",
            marginLeft: 4,
            fontSize: 23,
            color: loved ? "red" : "rgb(60, 72, 88)"
          }}
        />
      </div>
    </div>
  );
};

export default function VideoPlayer({
  title = "Hello",
  description,
  onClickLove
}) {
  const options = {};
  const classes = useTypoStyles();

  useEffect(() => {
    const player = videojs("my-player", options, function onPlayerReady() {
      videojs.log("Your player is ready!");

      // In this context, `this` is the player that was created by Video.js.
      this.play();

      // How about an event listener?
      this.on("ended", function () {
        videojs.log("Awww...over so soon?!");
      });
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        padding: 20
      }}
    >
      <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
      >
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
      <div style={{ marginTop: 10 }}>
        <InteractionSection onClickLove={onClickLove} />
      </div>
      <div style={{ marginTop: 10 }}>
        <ListTags tags={["amateur", "hardcore"]} />
      </div>
      <div className={classes.typo}>{title}</div>
      <div className={classes.note}>{description}</div>
    </div>
  );
}
