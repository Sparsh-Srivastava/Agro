import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/privateRoute";

// Screens
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import Dashboard from "./components/screens/Dashboard";
import Create from "./components/screens/Create";
import userArticles from "./components/screens/userArticles";
import Search from "./components/screens/Search";
import Article from "./components/screens/Article";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create" component={Create} />
          <PrivateRoute exact path="/myArticles" component={userArticles} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/article/:id" component={Article} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
