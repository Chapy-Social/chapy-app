import NotFound from "./pages/other/NotFound";
import Profile from "./pages/profile/Profile";
import ResetPassword from "./pages/reset-password/ResetPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/reset-password"}
          component={ResetPassword}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/not-found"}
          component={NotFound}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/:id"}
          component={Profile}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
