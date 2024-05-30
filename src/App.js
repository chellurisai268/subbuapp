import './App.css';

import Navbar from './navbar';
import {Link,Outlet} from 'react-router-dom'
function App() {
  return ( 
  <div className='border border-2 border-warning m-2 p-2'>
        <h2>App</h2>
       <Navbar></Navbar>
       <Outlet></Outlet>
      
  </div>
  );
}

export default App;
