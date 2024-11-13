import React, { useState } from 'react';
import styled from 'styled-components';

interface GenericListProps {
  items: any[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => Promise<void>;
  onAdd: () => void;
  renderItem: (item: any) => React.ReactNode;
}

const GenericList: React.FC<GenericListProps> = ({ items, onEdit, onDelete, onAdd, renderItem }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter(item =>
    Object.values(item).some((value: any) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <Container>
      <SearchContainer>
        <SearchBar
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar..."
        />
        <AddButton onClick={onAdd}>+ Cadastrar</AddButton>
      </SearchContainer>
      <ListContainer>
        {filteredItems.map((item) => (
          <ListItem key={item.id}>
            <ItemContent>
              {renderItem(item)}
            </ItemContent>
            <ButtonContainer>
              <Button onClick={() => onEdit(item.id)}>Editar</Button>
              <Button deleteButton onClick={() => onDelete(item.id)}>Deletar</Button>
            </ButtonContainer>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default GenericList;

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;  // Espaço em relação ao topo da página
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;  // Mantém a barra de busca centralizada
  margin-bottom: 2rem;  // Espaçamento maior para mover a caixa de busca para baixo
`;

const SearchBar = styled.input`
  padding: 1rem;  // Aumenta a altura da caixa de busca
  font-size: 1.25rem;  // Aumenta o tamanho da fonte da caixa de busca
  width: 100%;
  max-width: 500px;
  margin-right: 1rem;
`;

const AddButton = styled.button`
  background-color: #FBBA25;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;  // Alinha o ícone e o texto verticalmente
`;


const ListContainer = styled.div`
  margin-top: 4rem;  // Espaçamento maior entre a caixa de busca e a lista
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;  // Aumenta a largura máxima do item da lista
  padding: 2rem;  // Aumenta o padding dos itens da lista
  margin-bottom: 2rem;  // Espaçamento maior entre os itens da lista
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;  // Aumenta o tamanho da fonte dos itens da lista

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1.25rem;  // Ajusta o tamanho da fonte para telas menores
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;  // Aumenta o espaçamento entre os botões

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Button = styled.button<{ deleteButton?: boolean }>`
  background-color: ${({ deleteButton }) => (deleteButton ? '#d9534f' : '#007bff')};  // Mantém o "Editar" azul e o "Deletar" vermelho
  color: white;
  border: none;
  padding: 1rem 2rem;  // Aumenta o padding dos botões
  font-size: 1.25rem;  // Aumenta o tamanho da fonte dos botões
  cursor: pointer;

  @media (max-width: 600px) {
    flex: 1;
  }
`;
