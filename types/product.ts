export interface IProduct {
    description: string;
    inventory: number;
    colors: string[];
    productName: string;
    _id: string;
    status: string;
    category: string;
    price: number;
    slug:{
      _type: "slug"
      current : string};
    imageUrl: string;
    quantity: number 
  }
  