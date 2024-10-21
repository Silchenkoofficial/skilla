import { FC, useEffect, useState } from 'react';
import { useStore } from '@/hooks';
import { getReadableDate } from '@/utils';
import { IData, TSortByValues } from '@/types';
import { Row } from './components';
import { TableSkeleton } from './table-skeleton';
import {
  TableWrapper,
  StyledTable,
  Body,
  Header,
  DateRow,
  CallCount,
  DateText,
  HeaderCell,
} from './table.styled';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

interface IProps {
  filtersHeight: number;
}

export const Table: FC<IProps> = ({ filtersHeight }) => {
  const { state, setParams } = useStore();
  const [sortValue, setSortValue] = useState<TSortByValues>(null);

  useEffect(() => {
    setParams({ ...state.params, sort_by: sortValue });
  }, [sortValue]);

  const handleSortTable = (value: TSortByValues) => {
    setSortValue(sortValue === value ? null : value);
  };

  return (
    <TableWrapper>
      <StyledTable>
        <Header offset={filtersHeight}>
          <HeaderCell>Тип</HeaderCell>
          <HeaderCell
            active={sortValue === 'date'}
            onClick={() => handleSortTable('date')}
          >
            Время
            <ChevronIcon />
          </HeaderCell>
          <HeaderCell>Сотрудник</HeaderCell>
          <HeaderCell>Звонок</HeaderCell>
          <HeaderCell>Источник</HeaderCell>
          <HeaderCell>Оценка</HeaderCell>
          <HeaderCell
            active={sortValue === 'duration'}
            onClick={() => handleSortTable('duration')}
          >
            Длительность
            <ChevronIcon />
          </HeaderCell>
        </Header>
        <Body>
          {state.loading ? (
            <TableSkeleton />
          ) : (
            Object.entries(state.data).map(
              ([key, value]: [string, IData[]]) => (
                <>
                  <DateRow key={key}>
                    <DateText>
                      {getReadableDate(key)}
                      <CallCount>{value.length}</CallCount>
                    </DateText>
                  </DateRow>
                  {value.map((item: IData) => (
                    <Row key={item.id} callData={item} />
                  ))}
                </>
              )
            )
          )}
        </Body>
      </StyledTable>
    </TableWrapper>
  );
};
