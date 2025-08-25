// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import subHeaderStyle from './SubHeader.module.scss';

// Components
import { RegionsFilter } from './components/regions-filter/RegionsFilter';
import { SearchInput } from './components/search-input/SearchInput';
import { Notification, NotificationType } from '../../../components/notification/Notification.tsx';

export function SubHeader() {
  return (
    <div className={`${countriesStyle.subHeader} ${subHeaderStyle.subHeader}`}>
      <SearchInput />
      <Notification
        id={''}
        label={'Unsuccessful notification description'}
        type={NotificationType.ERROR}
        onCloseNotification={() => null}
      />
      <RegionsFilter />
    </div>
  );
}
