import { CategoryItemType } from '@shared/ui-types';

export function CategoryItem({ label, countCategories }: CategoryItemType) {
  const isOctal = (num: number) => {
    return num > 9 ? null : 0;
  };
  return (
    <div className="flex justify-between my-[20px] z-0">
      <div className="text-gray-pg font-medium text-xl">{label}</div>
      <div className="flex justify-center items-center w-[30px] w-[30px] border border-b-gray-pg">
        <div className="text-gray-pg text-xs">
          {isOctal(countCategories)}
          {countCategories}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
