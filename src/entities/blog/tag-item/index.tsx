import { TagItemType } from '@shared/ui-types';

export function TagItem({ label }: TagItemType) {
  return <div className="inline-block bg-dark-white-bg px-2 py-1 m-[4px] text-gray-pg">{label}</div>;
}

export default TagItem;
