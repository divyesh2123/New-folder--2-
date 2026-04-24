export default interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

}

export interface IlanguageContext {
    lan: string;
    setLan: React.Dispatch<React.SetStateAction<string>>;
}