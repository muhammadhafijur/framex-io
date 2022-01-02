import React, { useState } from "react";

const AddServices = () => {
  const [addServices, setAddServices] = useState({
    title: "",
    description: "",
    price: "",
    ratings: "",
    img: "",
  });

  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const newData = { ...addServices, [field]: e.target.value };
    setAddServices(newData);
  };

  const handleAddServices = (e: any) => {
    e.preventDefault();
    fetch("https://framex-server.herokuapp.com/api/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Services Added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddServices}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                Add Services
              </h2>
              <p className="text-gray-500 mb-6">Add services in the homepage</p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Service Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Service Name</label>
                        <input
                          type="text"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          name="title"
                          onChange={handleOnChange}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="desc">Service Description</label>
                        <textarea
                          id="desc"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Description"
                          name="description"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="price">Service Price</label>
                        <input
                          type="number"
                          id="price"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Price"
                          name="price"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="price">Service Ratings</label>
                        <input
                          type="number"
                          id="ratings"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Ratings"
                          name="ratings"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="img-url">Service Image url</label>
                        <input
                          type="text"
                          id="img-url"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Img url"
                          name="img"
                          onChange={handleOnChange}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="billing_same"
                            id="billing_same"
                            className="htmlForm-checkbox"
                          />
                          <label htmlFor="billing_same" className="ml-2">
                            My billing address is different than above.
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <input
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
