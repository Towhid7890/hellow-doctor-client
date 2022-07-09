import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
