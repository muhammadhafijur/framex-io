import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

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
              <h2 className="text-3xl my-2">{service?.title}</h2>
              <h2 className="font-semibold mb-1">${service?.price}</h2>
              <div>
                <Rating
                  readonly
                  placeholderRating={service?.ratings}
                  emptySymbol={<i className="far fa-star text-orange-400"></i>}
                  placeholderSymbol={
                    <i className="fas fa-star text-orange-400 " />
                  }
                  fullSymbol={<i className="fas fa-star bg-orange-400" />}
                />
              </div>
              <Link to={`/purchase/${service?._id}`}>
                <button className="p-2 px-6 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  Book Now
                </button>
              </Link>
            </section>
          </section>
        ))}
      </div>
    </>
  );
};

export default Services;
