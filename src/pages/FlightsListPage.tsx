import React from "react";
import { Finder } from "../components/Finder";

export function FlightsPage() {
  return (
    <div>
      <div className="mt-5 flex justify-start h-30 max-w-finder ml-10">
        {" "}
        <Finder />
      </div>
      <div className="flex justify-between mt-10 mx-10">
        <div className="border min-w-finder border-slate-300 rounded-lg">
          <ol className="mx-6 my-4">
            <li className="flex justify-between cursor-pointer my-4">
              <div className="flex justify-between">
                <img src="./ha.svg" alt="airlines"></img>
                <span className="ml-6">
                  <h4>16h 45m</h4>
                  <h4 className="text-gray-400">Hawaiian Airlines</h4>
                </span>
              </div>
              <h4 className="">7:00AM - 4:15PM</h4>
              <span>
                <h4>1 stop</h4>
                <h4 className="text-gray-400">2h 45m in HNL</h4>
              </span>
              <span>
                <h4>$624</h4>
                <h4 className="text-gray-400">round trip</h4>
              </span>
            </li>
          </ol>
        </div>
        <div className="max-w-backet border border-slate-300 rounded-lg">
          <div className="flex mx-4 my-4">
            <div className="flex mr-6">
              <img src="./ha.svg" alt="airlines"></img>
              <span className="ml-6">
                <h4>Hawaiian Airlines</h4>
                <h4 className="text-gray-400">FIG4312</h4>
              </span>
            </div>
            <span className="">
              <h4>7:00 AM - 4:15 PM</h4>
              <h4 className="text-gray-400">2h 45m in HNL</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
