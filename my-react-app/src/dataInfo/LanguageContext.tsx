import  {createContext} from 'react';
import type { IlanguageContext } from '../interface/IProduct';

const LanguageContext = createContext<IlanguageContext>({ 
    lan: 'en',
    setLan: () => {}
 });
export default LanguageContext;