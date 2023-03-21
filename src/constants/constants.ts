import { IProduct } from 'src/types/IProduct';

export const FAKESTORE_API = 'https://fakestoreapi.com/products?limit=12';
export const LOCALSTORAGE_KEY_SEARCH = 'search';
export const PRODUCTS_DATA: IProduct[] = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    description: 'An apple mobile which is nothing like apple',
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip',
    price: 899,
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    rating: { rate: 4.4, count: 34 },
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    rating: { rate: 4.1, count: 36 },
  },
  {
    id: 4,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    rating: { rate: 4.3, count: 123 },
  },
  {
    id: 5,
    title: 'Huawei P30',
    description:
      'Huawei re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    price: 499,
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    rating: { rate: 4.1, count: 32 },
  },
  {
    id: 6,
    title: 'MacBook Pro',
    description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
    price: 1749,
    category: 'laptops',
    image: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
    rating: { rate: 4.5, count: 83 },
  },
  {
    id: 7,
    title: 'Samsung Galaxy Book',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    price: 1499,
    category: 'laptops',
    image: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    rating: { rate: 4.2, count: 50 },
  },
  {
    id: 8,
    title: 'Microsoft Surface Laptop 4',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    price: 1499,
    category: 'laptops',
    image: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
    rating: { rate: 4.4, count: 68 },
  },
  {
    id: 9,
    title: 'Infinix INBOOK',
    description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    price: 1099,
    category: 'laptops',
    image: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
    rating: { rate: 4.5, count: 96 },
  },
  {
    id: 10,
    title: 'HP Pavilion 15-DK1056WM',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    price: 1099,
    category: 'laptops',
    image: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
    rating: { rate: 4.4, count: 89 },
  },
  {
    id: 11,
    title: 'perfume Oil',
    description:
      'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
    price: 13,
    category: 'fragrances',
    image: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
    rating: { rate: 4.5, count: 65 },
  },
  {
    id: 12,
    title: 'Brown Perfume',
    description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
    price: 40,
    category: 'fragrances',
    image: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
    rating: { rate: 4, count: 52 },
  },
];
