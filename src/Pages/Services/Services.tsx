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
      {services.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-12 w-11/12 mx-auto md:gap-5 lg:gap-5 mb-48 mt-12 ">
          {services.slice(0, 4).map((service) => (
            <div className="max-w-lg sm:my-24 mx-auto">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm sm:my-52 md:my-12 w-72 h-48 mb-5">
                <a href="#">
                  <img
                    className="rounded-t-lg h-full w-full"
                    src={service?.img}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {service?.title}
                    </h5>
                  </a>
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    ${service?.price}
                    </h5>
                  </a>
                  <div className="my-2">
                    <Rating
                      readonly
                      placeholderRating={service?.ratings}
                      emptySymbol={
                        <i className="far fa-star text-orange-400"></i>
                      }
                      placeholderSymbol={
                        <i className="fas fa-star text-orange-400 " />
                      }
                      fullSymbol={<i className="fas fa-star bg-orange-400" />}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-x-2">
                    <Link to={`/details/${service?._id}`}>
                      <button className="px-2 rounded-lg py-1 font-semibold transition ease-in duration-200 uppercase hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        View Details
                      </button>
                    </Link>

                    <Link to={`/purchase/${service?._id}`}>
                      <button className="px-2 rounded-lg py-1 font-semibold transition ease-in duration-200 uppercase hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;

{
  /* <>
      {services.length ? (
        <div className="grid grid-cols-4 w-11/12 mx-auto gap-5 mt-12 ">
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
                    emptySymbol={
                      <i className="far fa-star text-orange-400"></i>
                    }
                    placeholderSymbol={
                      <i className="fas fa-star text-orange-400 " />
                    }
                    fullSymbol={<i className="fas fa-star bg-orange-400" />}
                  />
                </div>
                <div className="space-x-5">
                  <Link to={`/details/${service?._id}`}>
                    <button className="p-2 px-6 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                      View Details
                    </button>
                  </Link>

                  <Link to={`/purchase/${service?._id}`}>
                    <button className="p-2 px-6 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                      Book Now
                    </button>
                  </Link>
                </div>
              </section>
            </section>
          ))}
        </div>
      ) : (
        <div className="flex items-center">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
          </div>
        </div>
      )}
    </> */
}
