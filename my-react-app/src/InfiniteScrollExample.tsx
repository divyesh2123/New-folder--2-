import React from 'react'
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPaginatedPosts = async (page: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  return data;
};



export default function InfiniteScrollExample() {

     const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
} = useInfiniteQuery({
  queryKey: ['infinitePosts'],
  queryFn: ({ pageParam = 1 }) => fetchPaginatedPosts(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) => {
    return  allPages.length + 1 ;
  },
});

const a= data?.pages.flatMap(page => page) || [];
console.log(a);
  return (
     <button onClick={() => fetchNextPage()} >
        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
      </button>
  )
}
