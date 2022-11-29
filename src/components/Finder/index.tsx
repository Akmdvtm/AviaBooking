import React from "react";
import { Link } from "react-router-dom";

export function Finder() {
  return (
    <div className="flex justify-center shadow-xl">
      <div>
        <img
          className="absolute ml-2 mt-3.5 w-5"
          src="./Union.svg"
          alt="union"
        ></img>
        <input
          className="rounded-l-lg placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-full pl-10"
          placeholder="From where?"
          type="text"
          name="from_city"
        />
      </div>
      <div>
        <img
          className="absolute ml-1.5 mt-2.5 w-7"
          src="./arrival.svg"
          alt="arrival"
        ></img>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-full pl-10"
          placeholder="Where to?"
          type="text"
          name="to_city"
        />
      </div>
      <div>
        <img
          className="absolute ml-1.5 mt-2.5 w-7"
          src="./calendar.svg"
          alt="calendar"
        ></img>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-full pl-10"
          placeholder="Depart - Return"
          type="text"
          name="date"
        />
      </div>
      <div>
        <img
          className="absolute ml-1.5 mt-2.5 w-7"
          src="./person.svg"
          alt="person"
        ></img>
        <input
          className="rounded-r-lg placeholder:text-slate-400 block bg-white w-full border border-slate-300 h-full pl-10"
          placeholder="1 adult"
          type="text"
          name="people_num"
        />
      </div>
      <Link to={"/flight_list"}>
        <img
          className="cursor-pointer"
          src="./search_button.svg"
          alt="search_button"
        />
      </Link>
    </div>
  );
}
