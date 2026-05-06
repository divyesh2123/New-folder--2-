import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
const GET_CHARACTERS = gql`
  query Character {
    character(id: "1") {
        id
        name
        status
        location {
            name
            type
            created
        }
    }
  
}
`;

export function ExampleData() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  
  console.log(data);


    return (    
        <div>
           
        </div>
    );
}
