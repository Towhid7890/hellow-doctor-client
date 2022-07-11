import React from "react";
import { format } from "date-fns/esm";

const BookingModal = ({ treatment, date }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">
            You are booking : {name}!
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
            action=""
          >
            <input
              disabled
              name="date"
              type="text"
              placeholder={format(date, "PP")}
              class="input  input-bordered input-info w-full max-w-xs"
            />
            <select
              name="slot"
              class="select select-bordered select-info  w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="input btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;