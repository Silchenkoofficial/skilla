import { FC, useEffect, useRef, useState } from 'react';
import { Filters } from './components';
import {
  Wrapper,
  StyledTable,
  Header,
  Body,
  Row,
  TypeCell,
  TimeCell,
  WorkerCell,
  CallCell,
  SourceCell,
  RateCell,
  DurationCell,
  TableWrapper,
} from './mango.styled';

interface IProps {}

export const Mango: FC<IProps> = () => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const [filtersHeight, setFiltersHeight] = useState<number>(0);

  useEffect(() => {
    if (!!filtersRef.current) {
      setFiltersHeight(filtersRef.current.offsetHeight);
    }
  }, []);

  return (
    <Wrapper>
      <Filters ref={filtersRef} />
      <TableWrapper>
        <StyledTable>
          <Header offset={filtersHeight}>
            <TypeCell>Тип</TypeCell>
            <TimeCell>Время</TimeCell>
            <WorkerCell>Сотрудник</WorkerCell>
            <CallCell>Звонок</CallCell>
            <SourceCell>Источник</SourceCell>
            <RateCell>Оценка</RateCell>
            <DurationCell>Длительность</DurationCell>
          </Header>
          <Body>
            {Array.from({ length: 20 })
              .fill(0)
              .map(() => (
                <Row>
                  <TypeCell>Тип Тип</TypeCell>
                  <TimeCell>Время Время</TimeCell>
                  <WorkerCell>Сотрудник Сотрудник</WorkerCell>
                  <CallCell>Звонок Звонок</CallCell>
                  <SourceCell>Источник Источник</SourceCell>
                  <RateCell>Оценка Оценка</RateCell>
                  <DurationCell>Длительность Длительность</DurationCell>
                </Row>
              ))}
          </Body>
        </StyledTable>
      </TableWrapper>
    </Wrapper>
  );
};
