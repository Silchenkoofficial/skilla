import styled from 'styled-components';

export const TableWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  min-width: 880px;
`;

export const StyledTable = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
`;

export const Body = styled.div`
  position: relative;
  overflow-x: auto;
`;

export const Cell = styled.div<{ red?: boolean; active?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 48px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme, active, red }) =>
    red ? theme.red : active ? theme.accent : theme.text};

  &:nth-child(1) {
    max-width: 54px; /* Тип */
  }
  &:nth-child(2) {
    max-width: 88px; /* Время */
  }
  &:nth-child(3) {
    max-width: 129px; /* Сотрудник */
  }
  &:nth-child(4) {
    max-width: 325px; /* Звонок */
  }
  &:nth-child(5) {
    max-width: 214px; /* Источник */
  }
  &:nth-child(6) {
    /* max-width: 146px; Оценка */
  }
  &:nth-child(7) {
    max-width: 352px;
    align-items: flex-end; /* Длительность */
  }
`;

export const TableRow = styled.div`
  padding: 8px 20px;
  display: flex;
  column-gap: 8px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(212, 223, 243, 0.17);
  }
`;

export const DateRow = styled(TableRow)`
  font-size: 15px;

  &:not(:first-child) {
    padding-top: 40px;
  }

  &:hover {
    background-color: inherit;
  }
`;

export const DateText = styled.div`
  position: relative;
`;

export const CallCount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.header};
  transform: translate(101%, -25%);
`;

export const Header = styled(TableRow)<{ offset: number }>`
  position: sticky;
  top: calc(-80px + ${({ offset }) => offset}px);
  z-index: 9;

  &:hover {
    background-color: inherit;
  }
`;

export const HeaderCell = styled(Cell)<{ onClick?: () => void }>`
  flex-direction: row;
  align-items: center;
  opacity: 0.87;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme, active, red }) =>
    red ? theme.red : active ? theme.accent : theme.textSecondary};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};

  &:nth-child(7) {
    max-width: 352px;
    align-items: center;
    justify-content: flex-end;
  }
`;
