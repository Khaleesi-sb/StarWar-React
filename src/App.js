import logo from './logo.svg';
import './App.css';
import TextField from './components/textField';
import Login from './pages/login';
import Router from './router';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Star Wars</h1>
        <AppRouter/>
      </header>
    </div>
  );
}

export default App;
