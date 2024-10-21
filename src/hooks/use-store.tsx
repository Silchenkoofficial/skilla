import { useContext } from 'react';
import { StoreContext } from '@/store';

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore должен использоваться внутри StoreProvider');
  }

  return context;
};
