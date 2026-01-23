// import logo from './logo.svg';
import './App.css';
import TimerBoard from './components/TimerBoard';

function App() {
  return ( 
    <div>
      <h1>Timer App</h1>
      <div className="timer-board">
        <TimerBoard />
      </div>
    </div>
  );
}

export default App;
