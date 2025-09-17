// React
import { QueryObserverResult } from '@tanstack/react-query';

// Styles
import systemErrorStyles from './SystemError.module.scss';

// Icons
import { icons } from '../../common/icons/icons.ts';

// Components
import Svg from '../svg/Svg.tsx';
import { TryAgainButton } from '../try-again-button/TryAgainButton.tsx';

// Types
import { SvgColors } from '../svg/Svg.types.ts';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.tsx';

interface SystemErrorProps<TData> {
  id: string;
  title: string;
  label: string;
  error: Error;
  isLoading: boolean;
  onRefetchData: () => Promise<QueryObserverResult<TData, Error>>;
}

export function SystemError<TData>({ id, title, label, error, isLoading, onRefetchData }: SystemErrorProps<TData>) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={id} className={`${systemErrorStyles.systemError} ${systemErrorStyles[theme]}`}>
      <div className={systemErrorStyles.systemErrorDetails}>
        <div className={systemErrorStyles.systemErrorContainer}>
          <h5 className={systemErrorStyles.title}>{title}</h5>
          <div className={systemErrorStyles.systemErrorInfo}>
            <Svg path={icons.errorIcon} strokeWidth={'2'} width="21" height="19" viewBox="0 -0.5 24 24" stroke={SvgColors.RED} />
            <span className={systemErrorStyles.label}>{label}</span>
          </div>
        </div>
        <TryAgainButton<TData> isLoading={isLoading} onRefetchData={onRefetchData} />
      </div>
      <SystemErrorDetailsDescription error={error} />
    </div>
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
