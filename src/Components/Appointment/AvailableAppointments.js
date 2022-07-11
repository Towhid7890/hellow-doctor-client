import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-12 py-12">
      <h1 className="text-center text-secondary font-bold lg:text-2xl">
        Available appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            service={service}
            setTreatment={setTreatment}
            key={service._id}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal date={date} treatment={treatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
