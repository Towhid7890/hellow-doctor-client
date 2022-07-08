import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const HomeAppointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="grid mt-8 lg:mt-28 grid-cols-1 lg:grid-cols-2 justify-center items-center px-12"
    >
      <div>
        <img style={{ marginTop: "-150px" }} src={doctor} alt="" />
      </div>
      <div>
        <h1 className="text-primary text-2xl font-bold">Appointment</h1>
        <h1 className="text-white text-4xl">Make an appointment Today</h1>
        <p className="text-white py-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn mb-5 lg:mb-0 border-none bg-gradient-to-r from-secondary to-primary uppercase text-white text-bold ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeAppointment;
