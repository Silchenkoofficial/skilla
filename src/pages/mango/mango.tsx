import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/hooks';
import { Filters, Table } from './components';
import { Wrapper } from './mango.styled';

export const Mango = () => {
  const { getList } = useStore();
  const filtersRef = useRef<HTMLDivElement>(null);
  const [filtersHeight, setFiltersHeight] = useState<number>(0);

  useEffect(() => {
    if (!!filtersRef.current) {
      setFiltersHeight(filtersRef.current.offsetHeight);
    }

    getList();
  }, []);

  return (
    <Wrapper>
      <Filters ref={filtersRef} />
      <Table filtersHeight={filtersHeight} />
    </Wrapper>
  );
};
