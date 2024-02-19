import './App.css';
import Navbar from  "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/Create">
            <Create/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
