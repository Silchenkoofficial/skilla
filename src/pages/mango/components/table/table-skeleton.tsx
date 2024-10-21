import { Skeleton } from '@/ui';
import { TableRow, Cell } from './table.styled';

export const TableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <TableRow key={index}>
          <Cell>
            <Skeleton width="32px" />
          </Cell>
          <Cell>
            <Skeleton width="100%" />
          </Cell>
          <Cell>
            <Skeleton width="32px" borderRadius={'full'} />
          </Cell>
          <Cell>
            <Skeleton width="100%" />
          </Cell>
          <Cell>
            <Skeleton width="100%" />
          </Cell>
          <Cell>
            <Skeleton width="100%" />
          </Cell>
          <Cell>
            <Skeleton width="100%" />
          </Cell>
        </TableRow>
      ))}
    </>
  );
};
