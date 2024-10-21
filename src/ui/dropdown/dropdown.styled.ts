import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.text};
`;

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  cursor: pointer;
`;

export const Content = styled.div<{ align: 'left' | 'right' }>`
  position: absolute;
  ${({ align }) => align}: 0;
  bottom: -12px;
  z-index: 99999;
  min-width: 133px;
  transform: translateY(100%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const StyledItem = styled.div<{ active: boolean }>`
  padding: 7px 12px;
  line-height: 18px;
  text-align: left;
  color: ${({ theme, active }) => (active ? theme.accent : theme.text)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9;
`;
