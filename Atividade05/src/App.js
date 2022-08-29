import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { PaginaPostar } from "./components/pages/PaginaPostar/PaginaPostar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/postar" element={<PaginaPostar></PaginaPostar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
