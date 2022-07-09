import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero mt-0 lg:mt-20 banner-section">
      <div className="hero-content flex-col lg:flex-row-reverse py-12">
        <img src={chair} alt="" className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold">
            Best <span className="text-primary">Dental Clinic</span> <br />
            You Can Trust
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn border-none bg-gradient-to-r from-secondary to-primary uppercase text-white text-bold ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
