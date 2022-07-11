import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{slots.length} spaces available</p>
          <p>
            {slots.length === 0 ? (
              <span className="text-red-500">Try another day.</span>
            ) : (
              <span>{slots[0]}</span>
            )}
          </p>
          <div class="card-actions">
            <label
              for="booking-modal"
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              class="btn modal-button btn-secondary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
