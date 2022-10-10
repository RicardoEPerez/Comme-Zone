import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolBar from "./Components/Toolbar/ToolBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Nosotros from "./Screen/About/Nosotros";
import Join from "./Screen/JoinIn/Join";
import Main from "./Screen/Main/Main";
import DonSaul from "./Screen/Tiendas/Don_Saul";
import Deporte from "./Screen/Tiendas/Deporterama";
import Left from "./Screen/Tiendas/Leftorium";
import Adult from "./Screen/Tiendas/Adult";
import Detalles from "./Screen/Detalles/Detalles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToolBar />}>

          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Join" element={<Join />} />
          <Route path="Main" element={<Main />} />

          <Route path="DonSaul" element={<DonSaul />} />
          <Route path="Deporte" element={<Deporte />} />
          <Route path="Left" element={<Left />} />

          <Route path="Adult" element={<Adult />} />

          <Route path="Detalles" element={<Detalles />}/>

          <Route path="*" element={<Navigate replace to="/Main" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
