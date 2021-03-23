import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "components/App";
import ReduxWithObservables from "components/redux-with-observables";
import { Layout } from "antd";

const { Content } = Layout;
export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <nav>
          <ul>
            <li>
              <Link to="/">Redux-Only</Link>
            </li>
            <li>
              <Link to="/redux-with-observables">Redux + Observables</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Content>
          <Switch>
            <Route path="/redux-with-observables">
              <ReduxWithObservables />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
