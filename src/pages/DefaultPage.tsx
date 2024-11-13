import styled from "styled-components";

const DefaultPage: React.FC = () => {
  return (
    <DefaultPageContainer>
      <Logo src="src/assets/logo.png" alt="Logo" />
      <WelcomeMessage>Bem-vindo ao Sistema de Gerenciamento!</WelcomeMessage>
    </DefaultPageContainer>
  );
};

export default DefaultPage;

const DefaultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #FBBA25;
`;

const Logo = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 20px;
  filter: drop-shadow(2px 4px 6px black);
`;

const WelcomeMessage = styled.h1`
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 30px;
  color: #FBBA25;
`;