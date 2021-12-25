import React from "react";

const Banner = () => {
  return (
    <div>
      <header>
        <div
          className="w-full mb-8 bg-center bg-fixed bg-cover h-96"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white uppercase lg:text-3xl mb-12">
              Photography is the art of making memories tangible.”{" "}
              </h1>
              <button className="w-full px-4 py-2 mt-4 text-xl font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-gray-100 lg:w-auto hover:bg-gray-200 focus:outline-none focus:bg-blue-500">
                JOIN OUR PHOTOGRAPHY ADVENTURE
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
