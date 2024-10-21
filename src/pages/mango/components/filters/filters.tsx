import { forwardRef } from 'react';
import { useStore } from '@/hooks';
import { formatDate } from '@/utils';
import { TYPE_OPTIONS, PERIOD_OPTIONS } from '@/constants';
import { Dropdown } from '@/ui';
import { Wrapper } from './filters.styled';

export const Filters = forwardRef<HTMLDivElement>((_, ref) => {
  const { state, setParams } = useStore();

  const handleTypeChange = (value: string) => {
    setParams({
      ...state.params,
      in_out: value === 'in' ? '1' : value === 'out' ? '0' : null,
    });
  };

  const handlePeriodChange = (value: string) => {
    const dateTill = new Date();
    let dateFrom: string;

    switch (value) {
      case 'week':
        dateFrom = formatDate(
          new Date(dateTill.setDate(dateTill.getDate() - 7))
        );
        break;
      case 'month':
        dateFrom = formatDate(
          new Date(dateTill.setMonth(dateTill.getMonth() - 1))
        );
        break;
      case 'year':
        dateFrom = formatDate(
          new Date(dateTill.setFullYear(dateTill.getFullYear() - 1))
        );
        break;
      default:
        dateFrom = formatDate(
          new Date(dateTill.setDate(dateTill.getDate() - 3))
        );
        break;
    }

    setParams({
      ...state.params,
      date_start: dateFrom,
      date_end: formatDate(new Date()),
    });
  };

  return (
    <Wrapper ref={ref}>
      <Dropdown
        initialValue={TYPE_OPTIONS[0]}
        options={TYPE_OPTIONS}
        onSelect={handleTypeChange}
      />
      <Dropdown
        initialValue={PERIOD_OPTIONS[0]}
        align={'right'}
        options={PERIOD_OPTIONS}
        onSelect={handlePeriodChange}
      />
    </Wrapper>
  );
});
