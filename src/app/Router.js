import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { App } from "components/App";

export default function Router() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Redux-Only</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
