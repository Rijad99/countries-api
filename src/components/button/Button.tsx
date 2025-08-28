// React
import { PropsWithChildren, useContext } from 'react';

// CSS
import buttonStyle from './Button.module.scss';

// Button hook
import useButtonHook from './useButtonHook';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import { Theme } from '../../pages/components/navigation/components/theme-switcher/ThemeSwitcher.tsx';

export interface ButtonProps {
  size: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const { theme } = useContext(ThemeContext);

  const { getButtonCSS } = useButtonHook();

  const buttonCSS = getButtonCSS(props.size);
  const isLoadingCSS = props.isLoading && buttonStyle.loading;
  const isDisabledCSS = props.isDisabled && buttonStyle.disabled;

  const themeButtonCSS = theme === Theme.DARK ? buttonStyle.DARK : buttonStyle.LIGHT;

  return (
    <button
      className={`${themeButtonCSS} ${buttonStyle.button} ${buttonCSS} ${isLoadingCSS} ${isDisabledCSS}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
