import React, { useEffect } from 'react'

export default function userFetch(url: string,method: string = 'GET', body: any = null) {

    const [data, setData] = React.useState<any>(null); 
    const [error, setError] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);     

    // fetch("url).then(response => response.json()).then(data => setData(data)).catch(error => setError(error)).finally(() => setLoading(false));
    // awit fetch("url").
    useEffect(() => {
        const fetchData = async () => {
            try {   
                setLoading(true);
                const response = await fetch(url, {
                    method,
                    headers: {  
                        'Content-Type': 'application/json'
                    },
                    body: body ? JSON.stringify(body) : null    
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }  
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, error, loading };
 
}
