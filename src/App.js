import './App.css';
import IndexKitsu from "./components/IndexKitsu.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TiraAnimeCrs from "./components/TiraAnimeCrs.js";
import Listado from "./components/Listado.js";
import Contacto from "./components/Contacto.js";

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<IndexKitsu />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
  );
}

export default App;
