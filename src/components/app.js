import React from "react";

import { getProfile } from "../utils/auth0";
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth0";
// import { useUser } from "../context/user-context";
// import { FullPageSpinner } from "../utils/lib"

const loadAuthenticatedApp = () => import("../components/authenticated-app");
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
const UnauthenticatedApp = React.lazy(() =>
  import("../components/unauthenticated-app")
);

export default () => {
  const user = getProfile();
  console.log("user app.js: ", user);

  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  React.useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return (
    <div>
      <p>Hi, {user.name ? user.name : "in app no user"}!</p>
      {/* <React.Suspense fallback={<FullPageSpinner />}> */}
      <React.Suspense fallback={<></>}>
        {user.name ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </div>
  );
};
