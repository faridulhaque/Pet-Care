import React from "react";

const PetShop = () => {
  return (
    <div
      className="my-10"
      style={{ height: "300px", display: "flex", alignItems: "center" }}
    >
      <div>
        <h2 className="text-3xl text-center text-primary my-5" >
          Are you worried about your pets' foods or medicines?{" "}
        </h2>
        <p className="mx-20 text-center text-secondary">
          We know that pets need special care and they need healthy foods and
          emergency medicines sometimes, but most of the time those are not
          available in the city. I have decided to start a shop where all kinds
          of pets' items, their foods and medicines will be available. So keep
          in touch with me.
        </p>
      </div>
    </div>
  );
};

export default PetShop;
