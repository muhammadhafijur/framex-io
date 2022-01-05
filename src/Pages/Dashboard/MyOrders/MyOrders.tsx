import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    let sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      let parsedUser = JSON.parse(sessionUser);
      setUser(parsedUser);
    }
    const email = user?.email;
    fetch(`https://framex-server.herokuapp.com/api/checkAdmin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.role === "admin") {
          fetch("https://framex-server.herokuapp.com/api/orders")
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              setOrders(data);
            });
        } else {
          fetch(`https://framex-server.herokuapp.com/api/order/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }
      });
  }, []);

  const handleDelete = (id: any) => {
    const proceed = window.confirm("Are you sure you want to cancel?");
    if (proceed) {
      const url = `https://framex-server.herokuapp.com/api/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Order has been deleted.");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="text-center font-medium text-lg">
      <div>
        <div className="w-3/4 mx-auto">
          <h1 className="mb-8 text-4xl text-center">Orders</h1>
          <h1 className="mb-4 text-xl ">
            Welcome to FrameX,{" "}
            <span className="font-bold text-gray-700">{user?.name}</span>
          </h1>
          <h1 className="mb-8 text-xl ">
            Your Email,{" "}
            <span className="font-bold text-gray-700">{user?.email}</span>
          </h1>
          <div className="flex bg-gray-800 text-white mb-8">
            <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Thumbnail</h3>
            <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">
              Service Title
            </h3>
            <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Price</h3>
            <h3 className="flex-none pl-6 rounded mb-4 mr-2 py-4">Status</h3>
            <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Action</h3>
          </div>
          {orders.map((order) => (
            <div className="flex" key="">
              <img
                className="rounded h-14 w-24 mr-2 mb-2"
                src={order?.img}
                alt=""
              />
              <h3 className="flex-grow border-2 pl-4 rounded mb-4 mr-2 py-4">
                {order?.title}
              </h3>
              <h3 className="flex-none border-2 px-4 rounded mb-4 mr-2 py-4">
                $ {order?.price}
              </h3>
              {/* <button className="px-8 flex-none rounded mb-4 mr-2 py-4 bg-green-500">
                Order Status
              </button> */}
              <button
                onClick={() => handleDelete(order?._id)}
                className="px-8 flex-none rounded mb-4 py-4 text-white bg-red-500"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
