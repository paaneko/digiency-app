'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@shared/lib/sanity.client';
import TeamProfileInfoType from '@entities/team-profile/info/model/types';

export default function useTeamProfileInfoQuery(
  query: string,
  authorSlug: string
): {
  data: TeamProfileInfoType;
  isLoading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<TeamProfileInfoType>({} as TeamProfileInfoType);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch<TeamProfileInfoType>(query, { authorSlug });
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
