import React from "react";
// import { AuthProvider } from "./auth-context.js";
// import { UserProvider } from "./user-context.js";

function AppProviders({ children }) {
  return (
    <>
      {/* <AuthProvider> */}
      {/* <UserProvider>{children}</UserProvider> */}
      {children}
      {/* </AuthProvider> */}
    </>
  );
}

export default AppProviders;
