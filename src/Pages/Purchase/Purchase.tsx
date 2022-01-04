import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Purchase = () => {
  const { id } = useParams();

  const [service, setService] = useState<any>({});

  useEffect(() => {
    fetch(`https://framex-server.herokuapp.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    data.img = service?.img;
    data.title = service?.title;
    data.price = service?.price;

    fetch("https://framex-server.herokuapp.com/api/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Booking Added Successfully");
          reset();
        }
      });
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto h-screen mt-10 mb-20">
        <h2 className="flex items-center justify-center text-5xl font-bold">
          Confirm your booking for {service?.title}
        </h2>
        <div className="flex justify-between flex-wrap mt-20">
          <div className="flex flex-col items-center justify-center max-w-[50%]  p-3">
            <img
              className="inline-block h-96 w-full rounded-md"
              src={service?.img}
              alt=""
            />
            <h2 className="text-center text-4xl mt-4 font-semibold">
              {service?.title}
            </h2>
            <h2 className="text-center text-2xl mt-4">
              {service?.description}
            </h2>
            <div className="text-2xl mt-2 text-center ">
              Ratings:{" "}
              <Rating
                readonly
                placeholderRating={service?.ratings}
                emptySymbol={<i className="far fa-star text-orange-400"></i>}
                placeholderSymbol={
                  <i className="fas fa-star text-orange-400 " />
                }
                fullSymbol={<i className="fas fa-star bg-orange-400" />}
              />
              <h4 className="text-2xl my-5">Price: ${service?.price}</h4>
            </div>
          </div>

          {/* react hook form starts*/}

          <div className="flex flex-col items-center justify-center min-w-[50%]">
            <h2 className="text-3xl font-bold mb-5">Billing Information</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center justify-center"
            >
              <input
                defaultValue="akbarkha@gmail.com"
                {...register("email", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5"
                type="email"
                placeholder="Your Email"
              />{" "}
              <br />
              <input
                defaultValue="Akbar Kha"
                {...register("name", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5"
                type="text"
                placeholder="Your Name"
              />{" "}
              <br />
              <input
                placeholder="Your Phone"
                {...register("phone", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5"
                type="number"
              />{" "}
              <br />
              <input
                placeholder="Shipping Address"
                {...register("address", { required: true })}
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/5"
                type="text"
              />{" "}
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                type="submit"
                className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-3/5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              />
            </form>

            {/* react hook form ends*/}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
