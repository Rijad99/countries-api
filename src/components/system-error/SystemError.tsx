// Styles
import systemErrorStyles from './SystemError.module.scss';

// Icons
import { icons } from '../../common/icons/icons.ts';

// Components
import Svg from '../svg/Svg.tsx';
import Button from '../button/Button.tsx';

// Types
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../svg/Svg.types.ts';
import { ButtonSize, ButtonType } from '../button/Button.types.ts';
import { QueryObserverResult } from '@tanstack/react-query';

interface SystemErrorProps {
  id: string;
  title: string,
  label: string;
  error: Error;
  onRefetchData: () => Promise<QueryObserverResult<QueryObserverResult, Error>>;
}

export function SystemError({ id, title, label, error, onRefetchData }: SystemErrorProps) {
  return (
    <div id={id} className={`${systemErrorStyles.systemError}`}>
      <div className={systemErrorStyles.systemErrorDetails}>
        <div className={systemErrorStyles.systemErrorContainer}>
          <h5 className={systemErrorStyles.title}>{title}</h5>
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
        <TryAgainButton onRefetchData={onRefetchData} />
      </div>
      <SystemErrorDetailsDescription error={error} />
    </div>
  );
}

interface TryAgainButtonProps {
  onRefetchData: () => Promise<QueryObserverResult<QueryObserverResult, Error>>;
}

function TryAgainButton({ onRefetchData }: TryAgainButtonProps) {
  return (
    <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.PRIMARY}
      additionalClasses={systemErrorStyles.systemErrorDetailsButton}
      onClick={onRefetchData}>
      <Svg
        path={icons.refreshIcon}
        strokeWidth={'2'}
        width="28"
        height="16"
        viewBox="10 0 22 22"
        stroke={SvgColors.GRAY}
        strokeLinejoin={SvgStrokeLineJoin.ROUND}
        strokeLinecap={SvgStrokeLineCap.ROUND}
      />
      Try Again
    </Button>
  );
}

interface SystemErrorDetailsDescriptionProps {
  error: Error;
}

function SystemErrorDetailsDescription({ error }: SystemErrorDetailsDescriptionProps) {
  return (
    <div className={systemErrorStyles.systemErrorDetailsDescription}>
      <span>{error.message}</span>
    </div>
  );
}
