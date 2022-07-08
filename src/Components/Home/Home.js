import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Exception from "./Exception";
import HomeAppointment from "./HomeAppointment";
import Services from "./Services";
import Testemonial from "./Testemonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Exception></Exception>
      <HomeAppointment></HomeAppointment>
      <Testemonial></Testemonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
