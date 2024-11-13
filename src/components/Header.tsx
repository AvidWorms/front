import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/alunos" isActive={location.pathname === '/alunos' || location.pathname.startsWith('/aluno-form')}>Gerenciar Alunos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/motorista-list" isActive={location.pathname === '/motorista-list'}>Gerenciar Motoristas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/presenca-list" isActive={location.pathname === '/presenca-list'}>Gerenciar Presenças</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/veiculo-list" isActive={location.pathname === '/veiculo-list'}>Gerenciar Veículos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rota-relatorio" isActive={location.pathname === '/rota-relatorio'}>Relatório de Rotas</NavLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 20px 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 20px;
`;

// Tipar o `NavLinkStyled` para receber o prop `isActive`
const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#FBBA25' : '#fff')};
  font-size: 1.5rem;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(250, 209, 5, 0.2);
    text-decoration: none;
  }
`;

export default Header;
