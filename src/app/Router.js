import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "components/App";
import ReduxWithObservables from "components/redux-with-observables";
import ContextWithObservables from "components/context-with-observables";

import { Layout } from "antd";
import UsersProvider from "components/context-with-observables/usersContext";

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
            <li>
              <Link to="/context-with-observables">Context + Observables</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Content>
          <Switch>
            <Route path="/redux-with-observables">
              <ReduxWithObservables />
            </Route>
            <Route path="/context-with-observables">
              <UsersProvider>
                <ContextWithObservables />
              </UsersProvider>
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
