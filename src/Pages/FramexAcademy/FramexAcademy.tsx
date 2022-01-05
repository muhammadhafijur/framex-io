import React from "react";

const FramexAcademy = () => {
  return (
    <div>
      <div className="md:flex w-11/12 my-12 mx-auto">
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="h-full max-w-1/2 lg:block right-0 top-0"
            alt=""
          />
        </div>
        <div className="md:w-2/3">
          <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              JOIN OUR FRAMEX ACADEMY
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  JOIN THE ACADEMY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramexAcademy;
