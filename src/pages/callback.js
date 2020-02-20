import React from "react";
import { handleAuthentication } from "../utils/auth0";
import { logout } from "../utils/auth0";

const Callback = () => {
  handleAuthentication();

  return (
    <>
      <p>Loading...</p>
    </>
  );
};

export default Callback;
