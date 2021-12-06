import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateActivity from "./components/CreateActivity";
import ActivityList from "./components/ActivityList";
import EditActivity from "./components/EditActivity";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact>
            <ActivityList />
          </Route>
          <Route exact path="/edit/:id">
            <EditActivity />
          </Route>
          <Route exact path="/create">
            <CreateActivity />
          </Route>
          <Route path="/user">
            <CreateUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
