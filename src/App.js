import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        {/* <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
