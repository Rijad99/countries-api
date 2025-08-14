// React
import { ReactElement } from "react";

// Styles
import skeletonLoadingStyle from './SkeletonLoading.module.scss';



export interface SkeletonLoadingProps {
    children: ReactElement
}

export function SkeletonLoading({ children }: SkeletonLoadingProps) {
    return <>
        {children}
    </>
}

export interface SkeletonLoaderCircularProps {
    width: number,
    height: number
}

export function SkeletonLoaderCircular({ width, height }: SkeletonLoaderCircularProps) {
    return (
        <div className={`${skeletonLoadingStyle.skeletonLoaderCircular} ${skeletonLoadingStyle.pulse}`} style={{ width: `${width}px`, height: `${height}px` }}></div>
    )
}
