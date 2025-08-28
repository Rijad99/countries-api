// React
import { QueryObserverResult } from '@tanstack/react-query';

// Components
import Button from '../button/Button.tsx';
import Svg from '../svg/Svg.tsx';

// Types
import { ButtonSize, ButtonType } from '../button/Button.tsx';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../svg/Svg.types.ts';

// Icons
import { icons } from '../../common/icons/icons.ts';

interface TryAgainButtonProps<TData> {
  onRefetchData: () => Promise<QueryObserverResult<TData, Error>>;
}

export function TryAgainButton<TData>({ onRefetchData }: TryAgainButtonProps<TData>) {
  return (
    <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.DARK}
      onClick={onRefetchData}
    >
      <Svg
        path={icons.refreshIcon}
        strokeWidth={'2'}
        width="28"
        height="16"
        viewBox="0 0 22 22"
        stroke={SvgColors.GRAY}
        strokeLinejoin={SvgStrokeLineJoin.ROUND}
        strokeLinecap={SvgStrokeLineCap.ROUND}
      />
      Try Again
    </Button>
  );
}
