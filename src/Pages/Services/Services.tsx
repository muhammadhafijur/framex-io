import React from "react";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://framex-server.herokuapp.com/api/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 w-11/12 mx-auto gap-5 mt-12">
        {services.map((service) => (
          <section className="container mx-auto px-0 md:px-0 ">
            <section className="p-5 bg-gray-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer border rounded-md">
              <img
                src={service?.img}
                alt=""
                className="inline-block h-52 w-full rounded-md"
              />
              <h2 className="text-3xl my-5">{service?.title}</h2>
              <h2 className="font-semibold mb-5">${service?.price}</h2>
              <button className="p-2 px-6 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                Book Now
              </button>
            </section>
          </section>
        ))}
      </div>
    </>
  );
};

export default Services;
