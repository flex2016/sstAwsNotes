import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/AsyncComponent";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

// import Home from "./containers/Home";
// import NotFound from "./containers/NotFound";
// import Login from "./containers/Login";
// import ResetPassword from "./containers/ResetPassword";
// import Signup from "./containers/Signup";
// import NewNote from "./containers/NewNote";
// import Notes from "./containers/Notes";
// import Settings from "./containers/Settings";
// import ChangePassword from "./containers/ChangePassword";
// import ChangeEmail from "./containers/ChangeEmail";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncSettings= asyncComponent(() => import("./containers/Settings"));
const AsyncLogin = asyncComponent(() => import("./containers/Login"));
const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
const AsyncResetPassword = asyncComponent(() => import("./containers/ResetPassword"));
const AsyncChangePassword = asyncComponent(() => import("./containers/ChangePassword"));
const AsyncChangeEmail = asyncComponent(() => import("./containers/ChangeEmail"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));



export default function Routes() {
  return (
    <Switch>
      <UnauthenticatedRoute exact path="/login/reset">
        <AsyncResetPassword />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <AsyncLogin />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <AsyncSignup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/settings/password">
        <AsyncChangePassword />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings/email">
        <AsyncChangeEmail />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <AsyncSettings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/new">
        <AsyncNewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <AsyncNotes />
      </AuthenticatedRoute>
      <Route exact path="/">
        <AsyncHome />
      </Route>
      <Route>
        <AsyncNotFound />
      </Route>
    </Switch>
  );
}
