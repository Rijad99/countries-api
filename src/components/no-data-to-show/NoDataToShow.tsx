// React
import { QueryObserverResult } from '@tanstack/react-query';

// Styles
import noDataToShowStyles from './NoDataToShow.module.scss';
import { TryAgainButton } from '../try-again-button/TryAgainButton.tsx';

interface NoDataToShowProps<TData> {
  id: string;
  title: string;
  label: string;
  onRefetchData: () => Promise<QueryObserverResult<TData, Error>>;
}

export function NoDataToShow<TData>({ id, title, label, onRefetchData }: NoDataToShowProps<TData>) {
  return (
    <div id={id} className={noDataToShowStyles.noDataContainer}>
      <div className={noDataToShowStyles.noDataInfo}>
        <h2>{title}</h2>
        <span>{label}</span>
      </div>
      <TryAgainButton<TData> onRefetchData={onRefetchData} />
    </div>
  );
}
