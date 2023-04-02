'use client';

import { useState } from 'react';
import Image from 'next/image';

function SearchBlog() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Do something with the search query
    console.log(query);
  };

  return (
    <form>
      <div className="relative">
        <input
          className=" mr-2.5 w-[370px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Search here..."
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full w-10 text-gray-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
        >
          <Image width={24} height={24} src="search.svg" alt="search-button" />
        </button>
      </div>
    </form>
  );
}

export default SearchBlog;
