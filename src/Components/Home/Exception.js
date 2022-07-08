import React from "react";
import treatment from "../../assets/images/treatment.png";
import "./Exception.css";

const Exception = () => {
  return (
    <div className="hero min-h-screen px-0 lg:px-28">
      <div className="hero-content exception flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:px-12">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn border-none bg-gradient-to-r from-secondary to-primary uppercase text-white text-bold ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exception;
