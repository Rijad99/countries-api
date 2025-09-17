// React
import { useCallback, useContext } from 'react';

// CSS
import selectedOptionCSS from './SelectedOption.module.scss';
import selectCSS from '../../Select.module.scss';

// Types
import { SelectedOptionProps } from './SelectedOption.types';
import { Theme } from '../../../../pages/components/navigation/components/theme-switcher/ThemeSwitcher';

// Icons
import { icons } from '../../../../common/icons/icons';

// Components
import Svg from '../../../svg/Svg';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types';

// Contexts
import { ThemeContext } from '../../../../context/ThemeContext';

function SelectedOption({ selectedOption, isSelectOpen, placeholder, selectedOptionAdditionalClasses, onSelectOpen }: SelectedOptionProps) {
  const { theme } = useContext(ThemeContext);

  const handleSelectOpen = useCallback(() => {
    onSelectOpen();
  }, [onSelectOpen]);

  const renderIcon = selectedOption?.icon && <img src={selectedOption.icon} alt={selectedOption.icon} />;
  const renderValue = selectedOption?.value ? selectedOption.value : placeholder;

  const arrowIconThemeColor = theme === Theme.LIGHT ? SvgColors.BLACK : SvgColors.WHITE;

  return (
    <div
      className={`${selectCSS[theme]} ${selectedOptionCSS.selectedOptionContainer} ${selectedOptionAdditionalClasses ? selectedOptionAdditionalClasses : ''}`}
      onClick={handleSelectOpen}
    >
      <div className={`${selectedOptionCSS.option} ${selectedOption && selectedOptionCSS.placeholder}`}>
        <div className={selectedOptionCSS.selectedOption}>
          {renderIcon}
          {renderValue}
        </div>
        <Svg
          path={icons.arrowIcon}
          width="8"
          height="6"
          strokeWidth="1.5"
          viewBox="0 0 12 7"
          stroke={arrowIconThemeColor}
          strokeLinecap={SvgStrokeLineCap.ROUND}
          strokeLinejoin={SvgStrokeLineJoin.ROUND}
          additionalClasses={`${isSelectOpen ? selectedOptionCSS.rotateArrow : selectedOptionCSS.arrow}`}
        />
      </div>
    </div>
  );
}

export default SelectedOption;
