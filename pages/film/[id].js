import React from "react";
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

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import { container } from "assets/jss/nextjs-material-kit.js";
import TopFilm from "components/TopFilms";
import CardFilm from "components/CardFilm";
import VideoPlayer from "components/VideoPlayer";

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
  const image = "https://gamek.mediacdn.vn/2019/4/2/5593750221964694304009154461548736446726144n-15541956621971642172282.jpg";
  return (
    <div>
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        image={image}
        styles={{ float: "left" }}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        image={image}
        styles={{ float: "left" }}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
      <CardFilm
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        styles={{ float: "left" }}
        image={image}
        title={"SSI-8329"}
      />
    </div>
  );
};

export default function Index() {
  const classes = useStyles();
  const onClickLove = (loved) => {
    console.log(loved);
  };
  return (
    <div>
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
      <Parallax image={require("assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <VideoPlayer
          title={"428SUKE-036 おマ●コ搾精ジェットフ"}
          onClickLove={onClickLove}
          description={
            "You can test that this is working by creating a simple page and importing some CSS. Start by creating a CSS file"
          }
        />
        <TopFilm title={"RELATED VIDEOS"} cardFilms={renderListFilms()} />
      </div>
    </div>
  );
}
