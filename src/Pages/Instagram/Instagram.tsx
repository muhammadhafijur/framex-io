import React, { useEffect, useState } from "react";

const Instagram = () => {
  const [event, setEvent] = useState<any[]>([]);

  useEffect(() => {
    fetch("/instafakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
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
        {event.map((event) => (
          <div className="rounded">
            <a href="/">
              <img src={event.img} alt="" className="inline-block h-64 w-full rounded-md"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
