// Styles
import systemErrorStyles from './SystemError.module.scss';

// Icons
import { icons } from '../../common/icons/icons.ts';

// Components
import Svg from '../svg/Svg.tsx';
import Button from '../button/Button.tsx';

// Types
import { SvgColors } from '../svg/Svg.types.ts';
import { ButtonSize, ButtonType } from '../button/Button.types.ts';

interface SystemErrorProps {
  id: string;
  label: string;
  error: Error;
  onShowErrorDetails: () => void;
}

export function SystemError({ id, label, error, onShowErrorDetails }: SystemErrorProps) {
  const renderShowErrorDetailsButton = onShowErrorDetails ? (
    <Button
      size={ButtonSize.SMALLEST}
      type={ButtonType.PRIMARY}
      additionalClasses={systemErrorStyles.systemErrorDetailsButton}
      onClick={onShowErrorDetails}
    >
      <Svg
        path={icons.arrowIcon}
        strokeWidth={'2'}
        width="21"
        height="19"
        viewBox="0 -6 20 21"
        stroke={SvgColors.GRAY}
      />
    </Button>
  ) : null;

  return (
    <div id={id} className={`${systemErrorStyles.systemError}`}>
      <div className={systemErrorStyles.systemErrorContainer}>
        <h5 className={systemErrorStyles.title}>System Error</h5>
        <div className={systemErrorStyles.systemErrorInfo}>
          <Svg
            path={icons.errorIcon}
            strokeWidth={'2'}
            width="21"
            height="19"
            viewBox="0 -0.5 24 24"
            stroke={SvgColors.RED}
          />
          <span className={systemErrorStyles.label}>{label}</span>
        </div>
      </div>
      {renderShowErrorDetailsButton}
    </div>
  );
}
