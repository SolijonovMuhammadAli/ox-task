import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import TabforServer from "./components/Dashboard/TabforServer";
import TabforSort from "./components/Dashboard/TabforSort";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/dashboard" component={TabforServer} />
        <ProtectedRoute path="/sort" component={TabforSort} />
        <ProtectedRoute path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
