'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@shared/lib/sanity.client';
import ReviewType from '@entities/home/our-testimonial/model/types';

type useReviewListQueryType = {
  ourTestimonial: ReviewType[];
};

export default function useReviewListQuery(query: string): {
  data: useReviewListQueryType;
  isLoading: boolean;
  error: boolean;
} {
  const [data, setData] = useState<useReviewListQueryType>({} as useReviewListQueryType);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch<useReviewListQueryType>(query);
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
