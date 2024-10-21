import styled, { css } from 'styled-components';

export type StatusType = keyof typeof StatusVariants;

const StatusVariants = {
  Отлично: css`
    color: ${({ theme }) => theme.green};
    background-color: ${({ theme }) => theme.lightGreen};
    border: 1px solid ${({ theme }) => theme.green};
  `,
  Хорошо: css`
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.accent};
  `,
  Плохо: css`
    color: ${({ theme }) => theme.red};
    background-color: ${({ theme }) => theme.lightRed};
    border: 1px solid ${({ theme }) => theme.red};
  `,
};

export const Wrapper = styled.div<{ type: StatusType }>`
  ${({ type }) => StatusVariants[type]};

  padding: 6px 8px;
  display: inline-flex;
  width: fit-content;
  border-radius: 4px;
`;
