import { FC, ReactNode } from 'react';
import { StatusType, Wrapper } from './status.styled';

interface IProps {
  children: ReactNode;
  type: StatusType;
}

export const Status: FC<IProps> = ({ children, type }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};
