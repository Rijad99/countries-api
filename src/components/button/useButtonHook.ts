// ENUMS
import { ButtonSize, ButtonType } from './Button.tsx';

// CSS
import buttonCSS from './Button.module.scss';
import { useCallback } from 'react';

function useButtonHook() {
  const getButtonCSS = useCallback((size: ButtonSize, type: ButtonType) => {
    let buttonSize = '';
    let buttonType = '';

    switch (size) {
      case 'SMALL':
        buttonSize = ButtonSize.SMALL;
        break;
      case 'MEDIUM':
        buttonSize = ButtonSize.MEDIUM;
        break;
      case 'LARGE':
        buttonSize = ButtonSize.LARGE;
        break;
    }

    switch (type) {
      case 'TRANSPARENT':
        buttonType = ButtonType.TRANSPARENT;
        break;
      case 'LIGHT':
        buttonType = ButtonType.LIGHT;
        break;
      case 'DARK':
        buttonType = ButtonType.DARK;
        break;
    }

    return `${buttonCSS[buttonSize]} ${buttonCSS[buttonType]}`;
  }, []);

  return { getButtonCSS };
}

export default useButtonHook;
