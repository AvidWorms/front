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
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter(item =>
    Object.values(item).some((value: any) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Tem certeza de que deseja deletar este item?');
    if (confirmDelete) {
      try {
        await onDelete(id);  // Chama a função de deleção
        alert('Item deletado com sucesso!');
        setSelectedItemId(null);  // Limpa o item selecionado após a exclusão
      } catch (error) {
        alert('Ocorreu um erro ao deletar o item.');
      }
    }
  };

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
              <Button deleteButton onClick={() => handleDelete(item.id)}>Deletar</Button>
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
  margin-top: 2rem;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchBar = styled.input`
  padding: 1rem;
  font-size: 1.25rem;
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
  align-items: center;
`;

const ListContainer = styled.div`
  margin-top: 4rem;
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
  max-width: 1200px;
  padding: 2rem;
  margin-bottom: 2rem;
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
  font-size: 1.5rem;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Button = styled.button<{ deleteButton?: boolean }>`
  background-color: ${({ deleteButton }) => (deleteButton ? '#d9534f' : '#007bff')};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;

  @media (max-width: 600px) {
    flex: 1;
  }
`;

