import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  min-width: 880px;
  overflow-x: hidden;
`;

export const StyledTable = styled.div`
  width: 100%;
  padding: 0 20px 0 40px;
  border-radius: 8px;
  background-color: #fff;
  overflow-x: auto;
`;

export const Row = styled.div`
  padding: 20px 0;
  display: flex;
  column-gap: 8px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;

export const Header = styled(Row)<{ offset: number }>`
  padding-top: 24px;
  padding-bottom: 20px;
  position: sticky;
  top: calc(-80px + ${({ offset }) => offset}px);
`;

export const Body = styled.div`
  overflow-x: auto;
`;

export const Cell = styled.div`
  flex: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TypeCell = styled(Cell)`
  max-width: 54px;
`;

export const TimeCell = styled(Cell)`
  max-width: 88px;
`;

export const WorkerCell = styled(Cell)`
  max-width: 129px;
`;

export const CallCell = styled(Cell)`
  max-width: 325px;
`;

export const SourceCell = styled(Cell)`
  max-width: 214px;
`;

export const RateCell = styled(Cell)`
  max-width: 461px;
`;

export const DurationCell = styled(Cell)`
  max-width: 110px;
`;
