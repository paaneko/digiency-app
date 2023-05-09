'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@shared/lib/sanity.client';
import OurBlogItem from '@entities/home/our-blog/model/types';

export default function useOurBlogListQuery(query: string): {
  data: OurBlogItem[];
  isLoading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<OurBlogItem[]>({} as OurBlogItem[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch<OurBlogItem[]>(query);
        setIsLoading(false);
        setData(result);
      } catch (err: any) {
        setIsLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, [query]);

  return { data, isLoading, error };
}
