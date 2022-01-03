import React from "react";
import Services from "../../Services/Services";
import Explore from "../../Explore/Explore";
import FramexAcademy from "../../FramexAcademy/FramexAcademy";
import Instagram from "../../Instagram/Instagram";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Shop from "../../Shop/Shop";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Follow from "../Follow/Follow";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Shop></Shop>
      <Follow></Follow>
      <Services></Services>
      <Explore></Explore>
      <FramexAcademy></FramexAcademy>
      <Instagram></Instagram>
      <Carousel />
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
