import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/privateRoute";

// Screens
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
