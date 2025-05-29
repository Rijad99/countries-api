// Styles
import categoryStyle from './Category.module.scss';



export interface CategoryProps {
    category: string
}

export function Category({ category }: CategoryProps) {

    return (
        <div className={categoryStyle.category}>
            {category}
        </div>
    )
}
