import './App.css';
import Left from './Components/Left/Left.jsx';
import Right from './Components/Right/Right.jsx';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
