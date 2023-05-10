'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@shared/lib/sanity.client';
import OurMemberItemType from '@entities/home/our-members/model/types';

export default function useOurMemberListQuery(query: string): {
  data: OurMemberItemType[];
  isLoading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<OurMemberItemType[]>([] as OurMemberItemType[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch<OurMemberItemType[]>(query);
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
