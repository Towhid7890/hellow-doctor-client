import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testemonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
    },
  ];
  return (
    <div className="px-12 py-12">
      <div className="flex justify-between ">
        <div>
          <h3 className="text-primary font-bold text-2xl">Testimonial</h3>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testemonial;
