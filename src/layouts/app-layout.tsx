import { FC, PropsWithChildren, ReactNode } from 'react';
import { Container, Wrapper } from './app-layout.styled';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
