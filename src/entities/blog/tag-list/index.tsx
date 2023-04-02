import { tagList } from '@shared/ui-config';
import { TagItem } from '@entities/blog/tag-item';

export function TagList() {
  return (
    <div>
      <div className="py-10 px-5 shadow-div my-6">
        <div className="flex flex-wrap font-medium text-2xl mb-6">Latest Posts</div>
        {tagList.map((tag) => (
          <TagItem label={tag.label} />
        ))}
      </div>
    </div>
  );
}

export default TagList;
