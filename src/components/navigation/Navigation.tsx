import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';

import countriesStyle from '../../pages/countries/Countries.module.scss';
import navigationStyle from './Navigation.module.scss';



export function Navigation() {

    return (
        <nav className={`${countriesStyle.navigation} ${navigationStyle.navigation}`}>
            <NavigationTitle title='Where in the world?' />
            <ThemeSwitcher />
        </nav>
    )
}

export interface NavigationTitleProps {
    title: string
}

export function NavigationTitle({ title } : NavigationTitleProps) {
    
    return (
        <h1>{title}</h1>
    )
}
