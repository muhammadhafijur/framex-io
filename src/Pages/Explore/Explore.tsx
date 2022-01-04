import React from "react";

const Explore = () => {
  return (
    <div>
      <div>
        <div
          className="w-full my-8 bg-center bg-fixed bg-cover h-96"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-xl text-white lg:text-7xl">
                COME EXPLORE WITH <br /> US
              </h1>
              <button className="w-full px-8 py-4 mt-4 text-xl font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-gray-100 lg:w-auto hover:bg-gray-200 focus:outline-none focus:bg-blue-500">
                FRAMEX EXPEDITIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
