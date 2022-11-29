import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../Auth/SignIn";
import { SignUp } from "../Auth/SignUp";

export function Navigation() {
  const [signUpOpened, setSignUpOpened] = React.useState(false);
  const [signInOpened, setSignInOpened] = React.useState(false);

  return (
    <>
      <nav
        className={
          "h-[66px] flex justify-between px-5 bg-white items-center text-gray-400"
        }
      >
        <Link to={"/"}>
          {" "}
          <img className="my-21" src="./logo.svg" alt="logo" />{" "}
        </Link>
        <span className="flex justify-between items-center">
          <Link
            to={"/"}
            className="mr-5 rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            Flights
          </Link>
          <div
            className="mr-5 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-100"
            onClick={() => {
              setSignInOpened(true);
              setSignUpOpened(false);
            }}
          >
            Sign in
          </div>
          <img
            onClick={() => {
              setSignUpOpened(true);
              setSignInOpened(false);
            }}
            className="cursor-pointer"
            src="./button.svg"
            alt="sign_up_button"
          />
        </span>
      </nav>
      {signInOpened && <SignIn />}
      {signUpOpened && <SignUp />}
    </>
  );
}
