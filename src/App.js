import logo from './logo.svg';
import './App.css';

function App() {
  var a=15;
   console.log(a);

   function onsubmit(e,dt){
    console.log(a);
    console.log(dt,e);
    console.log("Hello this is my minor change");
    Console.log("Hello this is our branch code");
   };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={(e)=>{onsubmit("hhhh",e)}}>Submit</button>
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

export default App;
