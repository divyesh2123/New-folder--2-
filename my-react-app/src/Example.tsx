import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

interface IUser {
    id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

export default function Example() {
const { data, isLoading, error } = useQuery<IUser[]>({
    queryKey: [],
    queryFn: fetchUsers
  });

  console.log(data, isLoading, error);


  return (
    <div>Example</div>
  )
}
