export interface Product {
    message:       string;
    foundProducts: FoundProduct[];
}

export interface FoundProduct {
    _id:        string;
    __v:        number;
    name?:      string;
    price:      number;
    category?:  Brand;
    brand?:     Brand;
    slug?:      string;
    status?:    string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Brand {
    name: string;
    slug: string;
    _id?: string;
}

export interface Cart {
  productsList: FoundProduct[];
  address: string;
  totalPrice: number;
}
