import React from "react";

const Shop = () => {
  return (
    <div className="flex w-11/12 mx-auto">
      <div className="w-1/3">
        <img
          src="https://image.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"
          className="h-full max-w-1/2 hidden lg:block right-0 top-0"
        />
      </div>
      <div className="w-2/3">
        <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            Shop our one tap photo editing presets It&#x27;s today or never.
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                SHOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
