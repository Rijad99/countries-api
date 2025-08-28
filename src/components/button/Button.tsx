// React
import { PropsWithChildren } from 'react';

// CSS
import buttonCSS from './Button.module.scss';

// Button hook
import useButtonHook from './useButtonHook';

export interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  onClick: () => void;
}

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum ButtonType {
  TRANSPARENT = 'TRANSPARENT',
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export enum ButtonState {
  DISABLED ='DISABLED',
  FETCHING = 'FETCHING',
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const { getButtonCSS } = useButtonHook();

  const buttonStyle = getButtonCSS(props.size, props.type);

  return (
    <button
      className={`${buttonCSS.button} ${buttonStyle}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
