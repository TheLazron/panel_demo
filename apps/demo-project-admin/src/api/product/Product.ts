import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Array<Order>;
  name: string | null;
  itemPrice: number | null;
  description: string | null;
};
