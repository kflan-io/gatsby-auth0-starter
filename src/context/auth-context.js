import React from "react";
import { useAsync } from "react-async";
import { bootstrapAppData } from "../utils/user-bootstrap";

import { login, logout, isAuthenticated, getProfile } from "../utils/auth0";
// import * as authClient from "../utils/auth-client";
// import { FullPageSpinner } from "../components/lib";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      //   return <FullPageSpinner />;
    }
    if (isRejected) {
      return (
        // <div css={{ color: "red" }}>
        <div>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }

  //   const login = form => authClient.login(form).then(reload);
  //   const register = form => authClient.register(form).then(reload);
  //   const logout = () => authClient.logout().then(reload);

  return (
    <AuthContext.Provider
      value={{ data, login, logout, isAuthenticated, getProfile }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
