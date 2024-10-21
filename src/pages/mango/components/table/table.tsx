import { FC, memo, useEffect } from 'react';
import { useStore } from '@/hooks';
import { Row } from './components';
import {
  TableWrapper,
  StyledTable,
  Body,
  Header,
  Cell,
  DateRow,
  CallCount,
  DateText,
} from './table.styled';
import { TableSkeleton } from './table-skeleton';
import { formatDate } from '@/utils';

interface IProps {
  filtersHeight: number;
}

export const Table: FC<IProps> = memo(({ filtersHeight }) => {
  const { state, getList } = useStore();

  useEffect(() => {
    getList();
  }, []);

  return (
    <TableWrapper>
      <StyledTable>
        <Header offset={filtersHeight}>
          <Cell>Тип</Cell>
          <Cell>Время</Cell>
          <Cell>Сотрудник</Cell>
          <Cell>Звонок</Cell>
          <Cell>Источник</Cell>
          <Cell>Оценка</Cell>
          <Cell>Длительность</Cell>
        </Header>
        <Body>
          {state.loading ? (
            <TableSkeleton />
          ) : (
            Object.entries(state.data).map(([key, value]: [string, any]) => (
              <>
                <DateRow key={key}>
                  <DateText>
                    {formatDate(key)}
                    <CallCount>{value.length}</CallCount>
                  </DateText>
                </DateRow>
                {value.map((item: any) => (
                  <Row key={item.id} callData={item} />
                ))}
              </>
            ))
          )}
        </Body>
      </StyledTable>
    </TableWrapper>
  );
});
