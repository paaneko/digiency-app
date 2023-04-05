'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, useMemo } from 'react';

interface BlogHeroContextProps {
  heroTitle: string;
  setHeroTitle: Dispatch<SetStateAction<string>>;
}

const BlogHeroContext = createContext<BlogHeroContextProps>({
  heroTitle: '',
  setHeroTitle: (): string => '',
});

export function BlogHeroContextProvider({ children }: any) {
  const [heroTitle, setHeroTitle] = useState('');

  return useMemo(
    () => <BlogHeroContext.Provider value={{ heroTitle, setHeroTitle }}>{children}</BlogHeroContext.Provider>,
    [heroTitle, children]
  );
}

export const useBlogHeroContext = () => useContext(BlogHeroContext);
