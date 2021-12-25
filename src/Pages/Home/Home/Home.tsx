import React from "react";
import useServices from "../../../hooks/useServices";
import NavBar from "../../Shared/NavBar/NavBar";

const Home = () => {
  const [services, setServices] = useServices();
  console.log(services);

  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
