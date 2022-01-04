import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Details = () => {
  const { id } = useParams();

  const [service, setService] = useState<any>({});

  useEffect(() => {
    fetch(`https://framex-server.herokuapp.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <>
      <NavBar />

      <div className="container mx-auto h-screen mt-10">
        <h2 className="flex items-center justify-center text-5xl font-bold">
          {service?.title}
        </h2>
        <div className="flex justify-center items-center flex-wrap mt-20">
          <div className="flex flex-col items-center justify-center  p-3">
            <img
              className="w-6/12 rounded-lg mx-auto inline-block h-96"
              src={service?.img}
              alt=""
            />

            <h4 className="text-2xl my-5">Price: ${service?.price}</h4>
            <h4 className="text-justify mb-5 w-3/5">{service?.description}</h4>

            <div className="flex justify-evenly w-3/5">
              <Link to="/home">
                <button
                  type="button"
                  className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Explore Services
                </button>
              </Link>
              <Link to="/purchase">
                <button
                  type="button"
                  className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Book This Service
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Details;
