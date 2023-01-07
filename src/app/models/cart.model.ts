export interface Cart {
  items: Array<CartItem>;
}
export interface CartItem {
    id: number;
    product: string;
    name: string;
    quantity: number;
    price: number;
}


