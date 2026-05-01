import React from 'react'

export default function HOCWithSearchAPI(Component: React.ComponentType<{ data: any[] }>,
    entity:string) {
  return function HOC() {

    const [data,setdata] = React.useState<any[]>([]);  

    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => 
    {
        fetch(`https://jsonplaceholder.typicode.com/${entity}`).
        then(res => res.json())
        .then(data => setdata(data))

    }, []);
    
    
        
        if(entity === 'users')
        {
            const filteredData = data.filter((item: any) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return (<Component data={filteredData}/>)


        }
        else if(entity === 'posts')
        {
            const filteredData = data.filter((item: any) => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

             return (<Component data={filteredData}/>)
        }
        
   
     
     
  }
}
