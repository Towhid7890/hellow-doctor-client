import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero mt-0 lg:mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt=""
          className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div className="mx-12">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
