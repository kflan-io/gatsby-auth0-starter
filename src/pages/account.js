import React from "react";
import { Router } from "@reach/router";
import { login, logout, isAuthenticated, getProfile } from "../utils/auth0";
import { Link } from "gatsby";

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "un-entered friend"}!</p>;
};
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Account = () => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();

  return (
    <>
      <nav>
        <Link to="/">Root</Link> <Link to="/account">Home</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/billing">Billing</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout();
            e.preventDefault();
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  );
};

export default Account;
