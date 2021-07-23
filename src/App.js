//import logo from './logo.svg';


import Home from './Home';
import Navbar from './Navebar';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
    <Navbar/>
    <div className="content">
        <h1>App Comoponent</h1>
        <Home/>
    </div>
    </div>
  ); 
}

export default App;
