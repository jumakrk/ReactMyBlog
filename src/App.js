import './App.css';
// import Content from './components/Content';
import Navbar from  "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
// import BlogList from './components/Bloglist';

function App() {
  return (
    <div className="App">
      <div className="content">

      </div>
      <Navbar/>
      {/* <Content/> */}
      <Home/>
    </div>
  );
}

export default App;
