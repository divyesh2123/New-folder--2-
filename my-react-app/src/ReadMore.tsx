import React from 'react'

interface ReadMoreProps {
    text: string;
}

export default function ReadMore({text}: ReadMoreProps) {

    const [isReadMore, setIsReadMore] = React.useState(true);

    const readMore = React.useMemo(() => {
        console.log('Calculating readMore value');  
        return text.slice(0, 50) + '...';
    },[text]);
  return (
    <div onClick={()=>{
        setIsReadMore(!isReadMore)
    }}>{isReadMore ? readMore : text}</div>
  )
}
