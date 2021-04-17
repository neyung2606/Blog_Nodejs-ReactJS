import React from "react";
import RouterComponent from "@routes";
import { hot } from "react-hot-loader/root";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <>
      <RouterComponent />;
      <NotificationContainer />
    </>
  );
}

export default hot(App);
