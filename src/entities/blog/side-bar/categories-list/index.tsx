import { useRefinementList } from 'react-instantsearch-hooks-web';

function cx(...classNames: any) {
  return classNames.filter(Boolean).join(' ');
}

function CategoryFilter(props: any) {
  // Retrieves the refinement `items` and the `refine` function to update the
  // refinement
  const { items, refine } = useRefinementList(props);

  const isOctal = (num: number) => {
    return num > 9 ? num : `0${num}`;
  };

  return (
    <div className="py-8 px-5 shadow-div my-6 w-full md:w-[330px] xl:w-full">
      <div className="text-3xl font-medium">Categories</div>
      <ul className="mt-6">
        {items.map((item) => (
          <li
            key={item.value}
            className={cx('font-medium text-2xl', item.isRefined && 'ais-RefinementList-item--selected')}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="flex justify-between my-[12px] z-0">
              <input
                className="opacity-0 h-0 w-0 hidden"
                type="checkbox"
                value={item.value}
                checked={item.isRefined}
                onChange={() => {
                  refine(item.value);
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              />
              <span
                className={`text-gray-pg font-medium text-xl ${
                  item.isRefined ? 'text-orange-main' : null
                } hover:text-orange-main cursor-pointer`}
              >
                {item.label}
              </span>
              <div className="flex justify-center items-center w-[30px] w-[30px] border border-b-gray-pg">
                <span className="text-gray-pg text-xs">{isOctal(item.count)}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
