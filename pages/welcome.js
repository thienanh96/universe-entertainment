import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import { container } from "assets/jss/nextjs-material-kit.js";
import TopFilm from "components/TopFilms";
import CardFilm from "components/CardFilm";
import SearchSection from "components/SearchSection";
import config from "../config.json";

import Router from "next/router";

const useStyles = makeStyles(styles);

const onClickJavCensor = () => {
  Router.push("/jav-censor");
};

const onClickJavUncensor = () => {
  Router.push("/jav-uncensor");
};
const onClickChina = () => {
  Router.push("/china");
};
const onClickAE = () => {
  Router.push("/america-europe");
};

const renderHeaderLinks = () => (
  <HeaderLinks
    onClickJavCensor={onClickJavCensor}
    onClickJavUncensor={onClickJavUncensor}
    onClickChina={onClickChina}
    onClickAE={onClickAE}
  />
);

const renderListFilms = () => {
  return (
    <div>
      <CardFilm
        filmId={1}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        styles={{ float: "left" }}
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={2}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        styles={{ float: "left" }}
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={3}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={4}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={5}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={6}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={7}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
      <CardFilm
        filmId={8}
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen"
        styles={{ float: "left" }}
        image={
          "https://img-l3.xvideos-cdn.com/videos/thumbs169lll/eb/f7/a3/ebf7a3d316f9852799a028dde6c0df36/ebf7a3d316f9852799a028dde6c0df36.16.jpg"
        }
        title={"SSI-8329"}
      />
    </div>
  );
};

export default function Index() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header
        brand="NextJS Material Kit"
        rightLinks={renderHeaderLinks()}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax image={config.bannerImageUrl}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Always up to date your porns</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <SearchSection />
      </div>
      <div className={classes.container}>
        <TopFilm title={"TOP CENSORED JAV"} cardFilms={renderListFilms()} />
        <TopFilm title={"TOP UNCENSORED JAV"} cardFilms={renderListFilms()} />
        <TopFilm title={"TOP CHINA"} cardFilms={renderListFilms()} />
        <TopFilm title={"TOP AMERICA/EUROPE"} cardFilms={renderListFilms()} />
      </div>
    </div>
  );
}
