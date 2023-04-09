import { categoriesList } from '@shared/ui-config';
import { CategoryItem } from '@entities/blog/side-bar/categories-item';

export function CategoriesList() {
  return (
    <div className="py-10 px-5 shadow-div my-6">
      <div className="font-medium text-2xl mb-7">Categories</div>
      {categoriesList.map((category) => (
        <CategoryItem label={category.label} countCategories={category.countCategories} />
      ))}
    </div>
  );
}

export default CategoriesList;
