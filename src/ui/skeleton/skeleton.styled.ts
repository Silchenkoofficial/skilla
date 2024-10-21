import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const SkeletonWrapper = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: number | 'full';
  overlay?: boolean;
  opacity?: number;
}>`
  display: inline-block;
  position: ${props => (props.overlay ? 'absolute' : 'relative')};
  overflow: hidden;
  background-color: ${props => (props.overlay ? 'transparent' : '#f2f5f8')};
  width: ${props => props.width || (props.overlay ? '100%' : 'auto')};
  height: ${props => props.height || (props.overlay ? '100%' : '32px')};
  border-radius: ${props =>
    props.borderRadius === 'full' ? 9999 : props.borderRadius || 4}px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.6) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${shimmer} 1.6s infinite;
  }
`;
