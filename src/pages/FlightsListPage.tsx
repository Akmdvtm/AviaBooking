import React from "react";
import { Finder } from "../components/Finder";
import {Cart} from "../components/Carts/Cart";
import {BucketCart} from "../components/Carts/BucketCart";

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
            <Cart/>
              <Cart/>
              <Cart/>
              <Cart/>
          </ol>
        </div>
          <div className="max-w-backet block border border-slate-300 rounded-lg">
              <BucketCart />
          </div>
      </div>
    </div>
  );
}
