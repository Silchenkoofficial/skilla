import { FC, ReactNode } from 'react';
import { Container, Wrapper } from './app-layout.styled';

interface IProps {
  children: ReactNode;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
