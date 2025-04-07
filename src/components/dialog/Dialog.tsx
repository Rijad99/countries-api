
// React
import { PropsWithChildren } from 'react';

// CSS
import dialogStyle from './Dialog.module.scss';



export interface DialogProps {
    classes?: string,
}

export function Dialog({ children, classes }: PropsWithChildren<DialogProps>) {

    const additionalClasses = classes ? classes : '';

    return (
        <div className={`${dialogStyle.dialog} ${additionalClasses}`}>
            {children}
        </div>
    )
}
