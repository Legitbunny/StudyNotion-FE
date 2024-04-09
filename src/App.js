import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<div className=" text-center font-extrabold">Frontend development is in progress...</div>} />
      </Routes>
    </div>
  );
}

export default App;
