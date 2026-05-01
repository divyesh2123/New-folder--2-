import React, { useEffect } from 'react'

export default function ProductWithPagination() {

    const [products, setProducts] = React.useState<Array<{ id: number }>>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 5;
    
   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(json=>setProducts(json))

    },[currentPage])

    console.log(products);
  return (
    <div>
        <h1>
          {
            products.slice((currentPage-1)*productsPerPage, currentPage*productsPerPage).
            map((product) => {
              return(<div key={product.id}>{product.id}</div>)
            })

          }
            {Array.from({ length: Math.ceil(products.length / productsPerPage) },
             (_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1} 
                 </button>
            ))}
        </h1>
    </div>
  )
}
