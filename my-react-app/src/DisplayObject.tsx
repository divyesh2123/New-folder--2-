import React, { useContext } from 'react'
import LanguageContext from './dataInfo/LanguageContext'

export default function DisplayObject() {

    const data = useContext(LanguageContext)
    console.log(data);
    const myobj: Record<'en' | 'fr', { firstName: string; lastName: string }> = {

        "en":{

            "firstName":"firstName",
            "lastName":"lastName",
        },
        
        "fr":{
            "firstName":"firstName in French",
            "lastName":"lastName in French",
        }
    }

  return (
    <div>
       
    </div>
  )
}
