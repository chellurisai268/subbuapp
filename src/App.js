
import './App.css';
import Todolist from './Todolist';
import Counter from './counter';

function App() {
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
