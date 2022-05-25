
import './App.css';

import { Timer } from './components/timer';
import {Todo} from "./components/todo";
import {Apifetch} from "./components/api";
import {Routes, Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/timer' element={<Timer/>} />
        <Route path='/api' element={<Apifetch/>} />
      </Routes>
       
       
  
    </div>
  );
}

export default App;
