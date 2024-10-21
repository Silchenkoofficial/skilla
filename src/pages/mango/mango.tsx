import { useEffect, useRef, useState } from 'react';
import { Filters, Table } from './components';
import { Wrapper } from './mango.styled';

export const Mango = () => {
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
      <Table filtersHeight={filtersHeight} />
    </Wrapper>
  );
};
