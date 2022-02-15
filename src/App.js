import './App.css';
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Ref from './components/Ref';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <State />
      <hr/>
      <Reducer />
      <hr/>
      <Effect />
      <hr/>
      <Ref />
    </div>
  );
}

export default App;
