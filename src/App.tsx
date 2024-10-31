import { useState } from "react";
import styled from "styled-components";

type Aluno = {nome: string, numero: number}

export const App = () => {

  const [estudou, setEstudou] = useState<boolean>(true);

  const alunos: Aluno[] = [{nome: 'Gabriel', numero: 12345}, {nome: 'Luiz', numero: 12345}]

  function AlunoComponent({aluno}: {aluno: Aluno}) {
    const {nome, numero} = aluno;
    return <SCAlunoComponent aluno={aluno}><p>{nome}</p><p>{numero}</p></SCAlunoComponent>
  }

  return (
    <div className="App">
      Hello World!
      {alunos.map((item, index) => < AlunoComponent aluno={item} key={index}/>)}
    </div>
  )
}

const SCAlunoComponent = styled.div<{ aluno: Aluno }>`
  background-color: ${({aluno}) => aluno.nome === 'Gabriel' ? 'red' : 'blue'};
`