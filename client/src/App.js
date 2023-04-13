import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="topNavbar">
        <Navbar/>
        <div className="main">
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
