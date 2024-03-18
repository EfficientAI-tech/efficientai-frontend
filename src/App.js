import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Efficient AI</h1>
        {<HomePage/>}
      </header>
    </div>
  );
}

export default App;
