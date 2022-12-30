import React from "react";

export function Cart() {
    return (
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
    )
}