import { ThemeProvider } from './theme';
import { AppLayout } from './layouts';
import { Mango } from './pages';

export const App = () => {
  return (
    <ThemeProvider>
      <AppLayout>
        <Mango />
      </AppLayout>
    </ThemeProvider>
  );
};
