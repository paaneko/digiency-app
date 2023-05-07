import { useEffect, useState } from 'react';
import { AuthorRelatedItemType } from '@shared/types';
import sanityClient from '@shared/lib/sanity.client';

export default function useRelatedQuery(
  query: string,
  slug: string
): {
  data: AuthorRelatedItemType[] | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<AuthorRelatedItemType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await sanityClient.fetch<AuthorRelatedItemType[]>(query, { slug });
        setData(result);
      } catch (err: any) {
        setError(err);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [slug, query]);

  return { data, isLoading, error };
}
