// React
import { ReactNode } from 'react';

// Icons
import { icons } from '../../common/icons/icons.ts';

// Styles
import notificationStyle from './Notification.module.scss';

// Components
import Button from '../button/Button.tsx';
import Svg from '../svg/Svg.tsx';

// Types
import { SvgColors } from '../svg/Svg.types.ts';
import { ButtonSize } from '../button/Button.tsx';

export enum NotificationType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO',
  ERROR = 'ERROR',
}

interface NotificationProps {
  id: string;
  label: string;
  type: NotificationType;
  onCloseNotification?: () => void;
}

export function Notification({ id, label, type, onCloseNotification }: NotificationProps) {
  const notification = mapTypeToNotification(type);

  const renderCloseNotificationButton = onCloseNotification ? (
    <Button
      size={ButtonSize.SMALL}
      onClick={onCloseNotification}
    >
      <Svg
        path={icons.closeIcon}
        strokeWidth={'2'}
        width="21"
        height="19"
        viewBox="0 -0.5 24 24"
        stroke={SvgColors.GRAY}
      />
    </Button>
  ) : null;

  return (
    <div id={id} className={`${notificationStyle.notification}`}>
      <div className={notificationStyle.notificationContainer}>
        <h5 className={notificationStyle.title}>{notification.title}</h5>
        <div className={notificationStyle.notificationInfo}>
          {notification.icon}
          <span className={notificationStyle.label}>{label}</span>
        </div>
      </div>
      {renderCloseNotificationButton}
    </div>
  );
}

interface NotificationState {
  title: string;
  icon: ReactNode;
}

function mapTypeToNotification(type: NotificationType): NotificationState {
  switch (type) {
    case NotificationType.SUCCESS:
      return {
        title: 'Successful',
        icon: (
          <Svg
            path={icons.checkmarkIcon}
            strokeWidth={'2'}
            width="21"
            height="19"
            viewBox="0 -0.5 24 24"
            stroke={SvgColors.GREEN}
          />
        ),
      };
    case NotificationType.WARNING:
      return {
        title: 'Warning',
        icon: (
          <Svg
            path={icons.warningIcon}
            strokeWidth={'2'}
            width="21"
            height="19"
            viewBox="0 -0.5 24 24"
            stroke={SvgColors.ORANGE}
          />
        ),
      };
    case NotificationType.INFO:
      return {
        title: 'Information',
        icon: (
          <Svg
            path={icons.infoIcon}
            strokeWidth={'2'}
            width="21"
            height="19"
            viewBox="0 -0.5 24 24"
            stroke={SvgColors.BLUE}
          />
        ),
      };
    case NotificationType.ERROR:
      return {
        title: 'Error',
        icon: (
          <Svg
            path={icons.errorIcon}
            strokeWidth={'2'}
            width="21"
            height="19"
            viewBox="0 -0.5 24 24"
            stroke={SvgColors.RED}
          />
        ),
      };
  }
}
