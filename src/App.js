import IndexMainKitsu from "./components/IndexMainKitsu.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listado from "./components/Listado.js";
import Contacto from "./components/Contacto.js";
import HeaderKitsu from "./components/HeaderKitsu.js";
import FooterKitsu from "./components/FooterKitsu.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Producto from "./components/Producto.js";
import SearchPage from "./components/SearchPage.js";
import ErrorPage from "./components/ErrorPage.js";

function App() {
  return (
      <Router>
      <HeaderKitsu />
        <Routes>
            <Route exact path="/" element={<IndexMainKitsu />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/producto/:isAnime/:id" element={<Producto />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/informacionUser" element={<SearchPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      <FooterKitsu />
      </Router>
  );
}

export default App;
