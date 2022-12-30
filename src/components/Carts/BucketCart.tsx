import React from "react";

export function BucketCart() {
    return (
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
    )
}