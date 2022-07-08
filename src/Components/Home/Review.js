import React from "react";

const Review = ({ review }) => {
  const { name, description, img, address } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{description}</p>
          <div className="flex mt-3 items-center">
            <div>
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} />
                </div>
              </div>
            </div>
            <div className="px-5">
              <h3 className="font-bold">{name}</h3>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
