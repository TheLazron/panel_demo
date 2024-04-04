import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  name?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
};
