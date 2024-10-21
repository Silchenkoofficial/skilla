import { FC } from 'react';
import { SkeletonWrapper } from './skeleton.styled';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: number | 'full';
  overlay?: boolean;
  opacity?: number;
}

export const Skeleton: FC<SkeletonProps> = ({
  overlay = false,
  opacity = 1,
  ...props
}) => {
  return <SkeletonWrapper overlay={overlay} opacity={opacity} {...props} />;
};
