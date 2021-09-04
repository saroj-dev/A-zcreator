import Nav from "./Components/Nav/Nav";
import "./Styles/GlobalCSS/GlobalCSS.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
