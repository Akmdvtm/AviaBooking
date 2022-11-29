import React from "react";

export function SignUp(props: any) {
  return (
    <div className="flex justify-center items-center absolute w-full h-screen z-10 backdrop-contrast-50">
      <div
        id="form"
        className="block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-90"
      >
        <form action="" className="mx-2">
          <div className="flex justify-between">
            <h3 className="my-2 text-gray-600"> Sign up for Tripma </h3>
            <button onClick={props.onClose}>x</button>
          </div>
          <h4 className="text-gray-400 max-w-sign max-h-sign">
            Tripma is totally free to use. Sign up using your email address or
            phone number below to get started.
          </h4>
          <input
            className="rounded mt-4 placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-1.5 pl-4"
            placeholder="Email or phone number"
            type="text"
            name="email_or_phone"
          />
          <input
            className="rounded mt-2 placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-1.5 pl-4"
            placeholder="Password"
            type="text"
            name="password"
          />
          <div className="mt-3">
            <div>
              <input
                type="checkbox"
                id="agree_terms"
                className="border-slate-300"
              />
              <span className="ml-2 text-gray-500 text-sm">
                I agree to the terms and conditions
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="send_alerts"
                className="border-slate-300"
              />
              <span className="ml-2 text-gray-500 text-sm">
                Send me the latest deal alerts
              </span>
            </div>
            <div className="mt-3">
              <img
                src="./signbutton.svg"
                alt="create_account"
                className=" cursor-pointer"
              />
              <img src="./frame.svg" alt="frame" className="mt-3" />
              <img
                src="./googlebutton.svg"
                alt="google_auth"
                className="mt-3 cursor-pointer"
              />
              <img
                src="./applebutton.svg"
                alt="apple_auth"
                className="mt-3 cursor-pointer"
              />
              <img
                src="./facebookbutton.svg"
                alt="facebook_auth"
                className="mt-3 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
