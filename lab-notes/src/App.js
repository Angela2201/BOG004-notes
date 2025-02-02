import React from 'react';
import './App.css';
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home'
import Wall from './components/Wall'

//Se crean componentes para hacre el ruteo
//const Home = () => <h1>Home</h1>
//const Wall = () => <h1>Wall</h1>
const NotFound = () => <h1>NotFound</h1> 

function App() {
  return (
    <div className='container'>
      <header>
        <nav>
          <ul>
            <li><Link to='./'>Home</Link></li>
            <li><Link to='/wall'>Wall</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='' element={<Home />} />
          <Route path='/wall' element={<Wall />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
