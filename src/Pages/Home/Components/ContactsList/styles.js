import styled from 'styled-components';

export const ListHeader = styled.header`
margin-top: 24px;
margin-bottom: 8px;

button {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-right: 8px;
    font-weight: bold;
  }

  img {
    transform: rotate(${({ orderBy }) => (orderBy === 'DESC' ? 0 : 180)}deg);
    transition: transform 0.3s ease-in;
  }

}
`;

export const Card = styled.div`
background-color: #fff;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
padding: 16px;
border-radius: 4px;
display:flex;
align-items: center;
justify-content: space-between;

& + & {
  margin-top: 16px;
}

.info {
  .contact-name {
    display: flex;
    align-items: center;
    small {
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      text-transform: uppercase;
      padding: 4px;
      border-radius: 4px;
      margin-left: 8px;
    }
  }
  span {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
}
.actions {
  display: flex;
  align-items: flex-start;
  button {
    background: transparent;
    border: none;
    margin-left: 8px;

  }
}
`;
