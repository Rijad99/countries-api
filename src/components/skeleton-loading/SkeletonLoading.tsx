// React
import { ReactElement, useContext } from 'react';

// Styles
import skeletonLoadingStyle from './SkeletonLoading.module.scss';

// Contexts
import { ThemeContext } from '../../context/ThemeContext.tsx';

export interface SkeletonLoadingProps {
  children: ReactElement;
}

export function SkeletonLoading({ children }: SkeletonLoadingProps) {
  return <>{children}</>;
}

export interface SkeletonLoaderCircularProps {
  width: number;
  height: number;
}

export function SkeletonLoaderCircular({ width, height }: SkeletonLoaderCircularProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${skeletonLoadingStyle.skeletonLoaderCircular} ${skeletonLoadingStyle.pulse} ${skeletonLoadingStyle[theme]}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
}
