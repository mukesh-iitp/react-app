import logo from './logo.svg';
import './App.css';

let a = 10;
var arr = [1,2,3,4,5];
const obj = {name : "Alexa"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

//named export
export {a as num, arr, obj};

//default export
export default App;
