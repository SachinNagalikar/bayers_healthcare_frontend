import logo from './logo.svg';
import './App.css';
import Router from './components/Router';
import Header from './components/Header';
function App() {
  return (
    <div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router/>
    </div>
  );
}

export default App;
