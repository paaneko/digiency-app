import React, { useEffect, useRef } from 'react';
import { useInfiniteHits, UseInfiniteHitsProps } from 'react-instantsearch-hooks-web';

function InfiniteHits(
  { hitComponent: HitComponent }: { hitComponent: React.ComponentType<{ hit: any }> },
  ...props: UseInfiniteHitsProps[]
) {
  // @ts-ignore
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </li>
        ))}
        <li className="ais-InfiniteHits-sentinel" ref={sentinelRef} aria-hidden="true" />
      </ul>
    </div>
  );
}

export default InfiniteHits;
