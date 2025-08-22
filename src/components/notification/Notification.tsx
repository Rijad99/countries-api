// Icons
import { icons } from '../../common/icons/icons.ts';

// Styles
import notificationStyle from './Notification.module.scss';
import Svg from '../svg/Svg.tsx';
import { SvgColors } from '../svg/Svg.types.ts';
import { ReactNode } from 'react';



export enum NotificationType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO',
  ERROR = 'ERROR'
}

interface NotificationProps {
  id: string;
  label: string;
  type: NotificationType;
  onCloseNotification?: () => void;
}

export function Notification({ id, label, type }: NotificationProps) {
  const notification = mapTypeToNotification(type);

  return (
    <div id={id} className={`${notificationStyle.notification}`}>
      <h5 className={notificationStyle.title}>{notification.title}</h5>
      <div className={notificationStyle.notificationInfo}>
        {notification.icon}
        <span className={notificationStyle.label}>{label}</span>
      </div>
    </div>
  )
}

interface NotificationState {
  title: string
  icon: ReactNode,
}

function mapTypeToNotification(type: NotificationType): NotificationState {

  switch (type) {
    case NotificationType.SUCCESS:
      return { title: 'Successful', icon: <Svg path={icons.checkmarkIcon} strokeWidth={'2'} width="21" height="19" viewBox="0 -0.5 24 24" stroke={SvgColors.GREEN} /> };
    case NotificationType.WARNING:
      return { title: 'Warning', icon: <Svg path={icons.warningIcon} strokeWidth={'2'} width="21" height="19" viewBox="0 -0.5 24 24" stroke={SvgColors.ORANGE} /> };
    case NotificationType.INFO:
      return { title: 'Information', icon: <Svg path={icons.infoIcon} strokeWidth={'2'} width="21" height="19" viewBox="0 -0.5 24 24" stroke={SvgColors.BLUE} /> };
    case NotificationType.ERROR:
      return { title: 'Error', icon: <Svg path={icons.errorIcon} strokeWidth={'2'} width="21" height="19" viewBox="0 -0.5 24 24" stroke={SvgColors.RED} /> };
  }
}
