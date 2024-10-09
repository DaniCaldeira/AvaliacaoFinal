import TelaInicial from "./componentes/Telas/TelaInicial";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import TelaVagas from "./componentes/Telas/TelaVagas";
import TelaCadastroCandidato from "./componentes/Telas/TelaCadastroCandidato";
import TelaCandidatos from "./componentes/Telas/TelaCandidatos";
import TelaInscricoes from "./componentes/Telas/TelaInscricoes";
import TelaLogin from "./componentes/Telas/TelaLogin";


export const ContextoUsuarioLogado = createContext(null);

function App() {
  
  const [usuarioLogado, setUsuarioLogado] = useState({
    nome: "",
    logado: false,
    token: ""
  });

  return (
    
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaInicial />} />
            <Route path="*" element={<Tela404 />} />
            <Route path="/vagas" element={<TelaVagas />} />
            <Route path="/cadastro" element={<TelaCadastroCandidato/>}/>
            <Route path="/candidatos" element={<TelaCandidatos/>}/>
            <Route path="/inscricoes" element={<TelaInscricoes/>}/>
            <Route path="/login" element={<TelaLogin/>}/>
          
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
