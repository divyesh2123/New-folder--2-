import { gql } from '@apollo/client';
import React, { useState } from 'react'
import { useMutation } from '@apollo/client/react';




export default function MyFormExample() {

const CREATE_ALBUM_EXAMPLE = gql`
  mutation CreateAlbum($input: CreateAlbumInput!) {
    createAlbum(input: $input) {
      id
      title
    }
  }
`;







const [createAlbum, { loading, error, data }] = useMutation(CREATE_ALBUM_EXAMPLE, {

    onCompleted: (data) => {
        console.log('Album created successfully:', data);
    },
    onError: (error) => {
        console.error('Error creating album:', error);
    },

});

    const [dataInfo,setData]= useState({
        userId : "",
        title: "",
        
       
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createAlbum({ variables: { input: dataInfo } });
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='userId' value={dataInfo.userId} onChange={(e)=> setData({...dataInfo, userId: e.target.value})} />
        <input type="text" placeholder='title' value={dataInfo.title} onChange={(e)=> setData({...dataInfo, title: e.target.value})} />
      
        <button type='submit'>Submit</button>

    </form>
  )
}
