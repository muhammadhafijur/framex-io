import React, { useEffect, useState } from "react";

const Instagram = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center my-12">
        {" "}
        Follow <span className="text-indigo-500 underline">@framex</span> on
        Instagram
      </h1>
      <div className="container grid grid-cols-4 gap-2 mx-auto w-full">
        {events.map((event) => (
          <div className="rounded">
            <a href="/">
              <img src={event.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
