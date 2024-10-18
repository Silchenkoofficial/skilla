import { forwardRef } from 'react';
import { Wrapper } from './filters.styled';

export const Filters = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Wrapper ref={ref}>
      <div>Все типы</div>
      <div>3 дня</div>
    </Wrapper>
  );
});
