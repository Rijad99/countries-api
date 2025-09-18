// Components
import Button, { ButtonSize } from '../../../../../components/button/Button.tsx';

interface FilterResetProps {
  handleFilterReset: () => void;
}

export function FilterReset({ handleFilterReset }: FilterResetProps) {
  return (
    <Button size={ButtonSize.MEDIUM} onClick={handleFilterReset}>
      <span>Reset Filters</span>
    </Button>
  );
}
