import React from "react";
import { Redirect, Route } from "react-router-dom";
import { TOKEN } from "./../const";
import Layouted from "./Layout";
function ProtectedRoute({ path, component }) {
  const token = localStorage.getItem(TOKEN);
  return token ? (
    <Layouted>
      <Route exact path={path} component={component} />
    </Layouted>
  ) : (
    <>
      <Redirect to="/" />
    </>
  );
}

export default ProtectedRoute;
