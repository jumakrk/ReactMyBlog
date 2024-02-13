import './App.css';
import Content from './components/Content';
import Blog from './components/Blogs';
import Navbar from  "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Blog/>
    </div>
  );
}

export default App;
