import './category-menu.style.scss';
import CategoryItem from '../category-item/CategoryItem.component';

const CategoryMenu = ({categories}) => {
    return (
        <div className="directory-container">
        {/* Create a div for each category */}
        {categories.map((category) => (
         <CategoryItem key={category.id} category={category} />
    ))}
   </div>
    )
}

export default CategoryMenu;