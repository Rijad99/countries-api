// ENUMS
import { ButtonSize } from './Button.tsx';

// CSS
import buttonCSS from './Button.module.scss';
import { useCallback } from 'react';

function useButtonHook() {
  const getButtonCSS = useCallback((size: ButtonSize) => {
    let buttonSize = '';

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

    return `${buttonCSS[buttonSize]}`;
  }, []);

  return { getButtonCSS };
}

export default useButtonHook;
