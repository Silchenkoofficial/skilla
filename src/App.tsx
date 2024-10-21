import { StoreProvider } from './store';
import { AppLayout } from './layouts';
import { Mango } from './pages';
import { ThemeProvider } from './theme';

export const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AppLayout>
          <Mango />
        </AppLayout>
      </StoreProvider>
    </ThemeProvider>
  );
};
