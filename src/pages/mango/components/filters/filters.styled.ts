import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: -80px;
  z-index: 10;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.background};
  font-size: 14px;
`;
