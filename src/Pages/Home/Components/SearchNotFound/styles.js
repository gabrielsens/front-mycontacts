import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items:flex-start;
  p {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.grey[200]};
    word-break: break-word;
  }
`;
