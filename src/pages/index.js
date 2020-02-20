import "../style/style-bootstrap";
import React from "react";
import { Link } from "gatsby";
import App from "../components/app";
import AppProviders from "../context";

export default () => (
  <>
    <AppProviders>
      <App />
    </AppProviders>
    <Link to="/account">Go to your account</Link>
  </>
);
