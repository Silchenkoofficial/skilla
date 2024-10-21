import styled from 'styled-components';

export const Wrapper = styled.div<{ isCollapse: boolean }>`
  margin-left: auto;
  padding: ${({ isCollapse }) => (isCollapse ? '12px 0' : '12px 20px')};
  display: flex;
  align-items: center;
  column-gap: 12px;
  background-color: ${({ isCollapse }) =>
    isCollapse ? 'transparent' : '#EAF0FA'};
  border-radius: 48px;
  transition-duration: 0.3s;
  overflow: hidden !important;
  line-height: 22px;
`;

export const ControlWrapper = styled.div`
  position: relative;
  height: 24px;
  transition-duration: 0.3s;
`;

export const Control = styled.div<{ isShow: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  transition-duration: 0.3s;
`;

export const Track = styled.div`
  flex: 1;
  min-height: 4px;
  background-color: ${({ theme }) => theme.iconColor};
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.iconColor};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
