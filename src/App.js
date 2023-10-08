import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Resources from "./pages/resources/Resources";
import Members from "./pages/members/Members";
import PtaMacs from "./pages/ptamacs/PtaMacs";
import UpcomingCCUs from "./pages/upcomingCCUs/UpcomingCCUs";
import PtaMacsForm from "./components/ptaMacsForm/PtaMacsForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>

        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/ptamacsform">
          <PtaMacsForm />
        </Route>
        <Route exact path="/ptamacs">
          <PtaMacs />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/upcoming-ccus">
          <UpcomingCCUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
