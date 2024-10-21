import styled from 'styled-components';

export const ArrowIcon = styled.div<{ in_out: boolean; red: boolean }>`
  color: ${({ theme, in_out, red }) =>
    !red ? (in_out ? theme.accent : theme.green) : theme.red};

  svg {
    transform: rotate(${({ in_out }) => (in_out ? '0' : '180')}deg);
  }
`;
