import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Certifique-se de ajustar o caminho do import conforme necessário
import AlunoList from './components/CadUpAluno/AlunoList'; 
import AlunoForm from './components/CadUpAluno/AlunoForm';
import DefaultPage from './pages/DefaultPage';
import VeiculoList from './components/CadUpVeiculo/VeiculoList';
import VeiculoForm from './components/CadUpVeiculo/VeiculoForm';
import MotoristaList from './components/cadUpMotorista/MotoristaList';
import MotoristaForm from './components/cadUpMotorista/MotoristaForm';
// import MotoristaList from './components/MotoristaList';
// import PresencaList from './components/PresencaList';
// import VeiculoList from './components/VeiculoList';
// import RelatorioDeRotas from './components/RelatorioDeRotas';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/aluno-form/:id?" element={<AlunoForm />} />
        <Route path="/alunos" element={<AlunoList />} />

        <Route path="/motorista-form/:id?" element={<MotoristaForm />} />
        <Route path="/motoristas" element={<MotoristaList />} />

        <Route path="/veiculo-form/:id?" element={<VeiculoForm />} />
        <Route path="/veiculos" element={<VeiculoList />} />
        
      </Routes>
    </Router>
  );
};



export default App;
