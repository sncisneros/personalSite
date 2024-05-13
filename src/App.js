import { Route, Routes } from 'react-router-dom';
// We will create these two pages in a moment
import HomePage from './pages/HomePage';
import Experience from './pages/Experience';
import Skills from './pages/Skills';

import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        

        <p>Sasha's new React Application!</p>
        <p>What else shall we add?</p>
      </header>
    </div>
  );
} */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<Experience />}></Route>
      <Route path="/Skills" element={<Skills />}></Route>
    </Routes>
  );
}

//export default App;
