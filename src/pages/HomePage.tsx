import React from "react";
import { Finder } from "../components/Finder";

export function HomePage() {
  return (
    <div>
      <div className="flex flex-col justify-between bg-100 bg-center bg-world-bg">
        <h1 className="mt-20 text-center text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-700">
          <div className="">It's more than</div>
          <div className="">just a trip</div>
        </h1>
        <div className="mt-20 flex justify-start h-30 mx-60">
          {" "}
          <Finder />
        </div>
        <div className="mt-60" />
      </div>
    </div>
  );
}
