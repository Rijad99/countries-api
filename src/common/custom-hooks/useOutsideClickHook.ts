// React
import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

function useOutsideClickHook(ref: RefObject<HTMLElement | null>, refSetStateCallback: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref) {
        if (ref.current && e.target instanceof Node && !ref.current?.contains(e.target)) {
          refSetStateCallback(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref, refSetStateCallback]);
}

export default useOutsideClickHook;
