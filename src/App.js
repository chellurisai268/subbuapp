
import { Link } from 'react-router-dom';
import './App.css';
import { Outlet} from 'react-router-dom';

function App() {
  return (
    <div className=" ">
      <h1>App</h1>
      <ul>
        <li>
       <Link to='/kaju'>kajul </Link>
        </li>
        <li>
          <Link to='/hon'>my bikes</Link>
        </li>
        <li>
          <Link to='/counteries'>counteries</Link>
        </li>
        
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
