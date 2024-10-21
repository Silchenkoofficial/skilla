import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globalStyles';
import { darkTheme, lightTheme } from './theme';

type ThemeType = 'light' | 'dark';

interface IThemeContextProps {
  toggleTheme?: () => void;
  theme: ThemeType;
}

const ThemeContext = createContext<IThemeContextProps>({ theme: 'light' });

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={themeMode}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
