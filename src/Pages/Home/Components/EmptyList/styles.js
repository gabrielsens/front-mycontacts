import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction:column;
  align-items: center;

   p {
    margin-top: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey[200]};
      strong {
        color: ${({ theme }) => theme.colors.primary.main};
      }
   }
`;
