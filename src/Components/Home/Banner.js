import React from "react";
import chair from '../../assets/images/chair.png';
import './Banner.css';
const Banner = () => {
  return (
      <div class="hero mt-0 lg:mt-20 banner-section">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-3xl lg:text-6xl font-bold">Best <span class="text-primary">Dental Clinic</span> You <br /> Can Trust</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white text-bold ">Get Started</button>
          </div>
        </div>
      </div>
  );
};

export default Banner;
