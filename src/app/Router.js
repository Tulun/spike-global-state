import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "components/App";
import ReduxWithObservables from "components/redux-with-observables";
import ContextWithAsync from "components/context-with-async";
import ReactQueryView from "components/react-query";
import ReactWiringView from "components/react-wiring";
import QueryProvider from "components/react-query/ReactQueryProvider";
import { Layout } from "antd";
import UsersProvider from "components/context-with-async/usersContext";
import ReactGlobalStateView, {GlobalStateProvider,handlers,defaultState} from "components/react-global-state";

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
              <Link to="/context-with-async">Context + ContextWithAsync</Link>
            </li>
            <li>
              <Link to="/react-query">React Query</Link>
            </li>
            <li>
              <Link to="/react-wiring">React Wiring</Link>
            </li>
            <li>
              <Link to="/react-global-state">React Global State</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Content>
          <Switch>
            <Route path="/react-query">
              <QueryProvider>
                <ReactQueryView />
              </QueryProvider>
            </Route>
            <Route path="/redux-with-observables">
              <ReduxWithObservables />
            </Route>
            <Route path="/context-with-async">
              <UsersProvider>
                <ContextWithAsync />
              </UsersProvider>
            </Route>
            <Route path="/react-wiring">
              <ReactWiringView />
            </Route>
            <Route path="/react-global-state">
              <GlobalStateProvider handlers={handlers} defaultState={defaultState}>
                <ReactGlobalStateView />
              </GlobalStateProvider>
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
