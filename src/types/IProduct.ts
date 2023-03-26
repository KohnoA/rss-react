export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  rate: number;
  date: string;
  category: string;
  condition: string;
  tags: {
    urgently: boolean;
    bargain: boolean;
  };
}
