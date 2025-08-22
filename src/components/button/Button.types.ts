export interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  additionalClasses?: string;
  onClick: () => void;
}

export enum ButtonSize {
  SMALLEST = 'smallest',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonType {
  PRIMARY = 'primary',
  DISABLED = 'disabled',
}
