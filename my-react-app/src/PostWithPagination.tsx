import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchPaginatedPosts = async (page: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  return data;
};


export default function PostWithPagination() {
     const [page, setPage] = useState(1);

const { data, isFetching } = useQuery({
  queryKey: ['posts', page],
  queryFn: () => fetchPaginatedPosts(page),
  placeholderData: (previousData) => previousData,
});
  return (
    <div>

     {/* <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>
          Previous
        </button>

       <button
  onClick={() => setPage(old => old + 1)}
 
>
  Next
</button>
      </div> */}

      {isFetching && <p>Loading more...</p>}
    

    </div>
  )
}
