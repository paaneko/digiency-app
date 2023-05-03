'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@shared/lib/sanity.client';
import { AuthorProfileInfoType } from '@entities/author-profile/info/model/types';

export default function useAuthorProfileInfoQuery(
  query: string,
  authorSlug: string
): {
  data: AuthorProfileInfoType;
  isLoading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<AuthorProfileInfoType>({} as AuthorProfileInfoType);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch<AuthorProfileInfoType>(query, { authorSlug });
        setIsLoading(false);
        setData(result);
      } catch (err: any) {
        setIsLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, [authorSlug, query]);

  return { data, isLoading, error };
}
