import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { routePath, routes } from "./routes";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("access-token") ? (
        <Component {...props} />
      ) : (
        <Redirect to={routePath.login} />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const RouterComponent = () => {
  return (
    <Router>
      <Suspense fallback={"Loading."}>
        <Switch>
          <Redirect
            exact
            from="/"
            to={
              localStorage.getItem("access-token")
                ? routePath.user
                : routePath.login
            }
          />
          {routes.map((route, index) => {
            return route.protected ? (
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={React.lazy(() =>
                  import(`@pages/${route.component}`)
                )}
              />
            ) : (
              <PublicRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={React.lazy(() =>
                  import(`@pages/${route.component}`)
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;
