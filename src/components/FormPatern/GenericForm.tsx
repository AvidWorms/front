import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface GenericFormProps {
  title: string;
  initialData: any;
  fetchItemById?: (id: string) => Promise<any>;
  createItem: (data: any) => Promise<void>;
  updateItem: (id: string, data: any) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  onFormSubmit: () => void;
  selectedItemId?: string;
  fieldComponents: React.FC<any>[];
}

const GenericForm: React.FC<GenericFormProps> = ({
  title,
  initialData,
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
  onFormSubmit,
  selectedItemId,
  fieldComponents
}) => {
  const [formData, setFormData] = useState<any>(initialData);
  console.log(formData)

  useEffect(() => {
    console.log('Selected Item ID:', selectedItemId);
    if (selectedItemId && fetchItemById) {
      fetchItemById(selectedItemId).then(data => {
        console.log('Dados do Item:', data);
        setFormData(data);
      });
    }
  }, [selectedItemId, fetchItemById]);

  useEffect(() => {
    if (!selectedItemId) {
      setFormData(initialData);
    }
  }, [selectedItemId, initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    if (selectedItemId) {
      await updateItem(selectedItemId, formData);
    } else {
      await createItem(formData);
    }
    console.log('Dados do Formulário:', formData);
    alert('Dados salvos com sucesso!');
    onFormSubmit();
  };

  const handleDelete = async () => {
    if (window.confirm('Tem certeza de que deseja deletar este item?') && selectedItemId) {
      await deleteItem(selectedItemId);
      setFormData(initialData);
      alert('Item deletado com sucesso!');
      onFormSubmit();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{title}</Title>
      {fieldComponents.map((FieldComponent, index) => (
        <FieldComponent key={index} formData={formData} handleChange={handleChange} />
      ))}
      <ButtonContainer>
        <Button type="submit">Salvar Dados</Button>
        <Button type="button" deleteButton onClick={handleDelete}>Deletar Item</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default GenericForm;

const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button<{ deleteButton?: boolean }>`
  width: 48%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${({ deleteButton }) => (deleteButton ? '#d9534f' : '#007bff')};
  &:hover {
    background-color: ${({ deleteButton }) => (deleteButton ? '#c9302c' : '#0056b3')};
  }
`;
