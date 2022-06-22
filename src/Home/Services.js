import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Services = () => {
    const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mb-5">
      <h2 className="text-center text-4xl font-bold mb-5">Services</h2>
      <div className="services-cards-container">
        {data.map((d) => (
          <div className="service-card">
            <div className="service-card-top-style bg-secondary">
              <h2 className="card-title text-primary ml-3">{d.service}!</h2>
            </div>
            <div>
                <img className="service-card-img" src={d.img} alt="pet"/>
            </div>
            <div className="mx-3 mt-5">
              <p className="text-secondary text-justify">{d.comment}</p>
              <div className="card-actions justify-start">
                <button onClick={()=>(navigate(`/home/${d.id}`))} className="btn btn-primary button-service-card">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
