import React from "react";
import clock from "../../assets/icons/clock.svg";
import map from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-0 lg:py-28">
      <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
        <figure className="pl-2 mt-2 lg:mt-0">
          <img src={clock} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div className="card lg:card-side bg-accent shadow-xl">
        <figure className="pl-2 mt-2 lg:mt-0">
          <img src={map} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Visit Our Location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
        <figure className="pl-2 mt-2 lg:mt-0">
          <img src={phone} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Contact Us Now</h2>
          <p>+000 123 456789.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
