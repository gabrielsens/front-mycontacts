import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    /* Estilos iniciais */
    opacity: 0;
  }
  to {
    /*  Estilos finais  - forwards para manter o estilo */
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    /* Estilos iniciais */
    transform: scale(0)
  }
  to {
    /*  Estilos finais  - forwards para manter o estilo */
    transform: scale(1)
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  height:100%;
  width:100%;
  left: 0;
  top:0;
  display: flex;
  justify-content:center;
  align-items: center;
  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #FFF;
  border-radius: 4px;
  padding:24px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  animation: ${scaleIn} 0.3s;

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.grey[900]
  )};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.grey[200]};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
