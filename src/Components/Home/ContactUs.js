import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div className="py-12" style={{ background: `url(${appointment})` }}>
      <div className="w-50 text-center">
        <h3 className="text-primary font-bold pt-5">Contact Us</h3>
        <h1 className="text-white text-3xl">Stay connected with us</h1>
        <div className="mt-5">
          <form action="">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-sm w-full max-w-xs mb-3"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-sm w-full max-w-xs mb-3"
            />{" "}
            <br />
            <textarea
              className="textarea textarea-success w-full max-w-xs"
              placeholder="Your Message"
            ></textarea>{" "}
            <br />
            <input
              className="bg-gradient-to-r from-secondary to-primary uppercase px-5 py-2 rounded text-white "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
