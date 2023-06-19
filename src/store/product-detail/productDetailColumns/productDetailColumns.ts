import { A1A2_Cable_Glands_Table } from "./A1A2_Cable_Glands";
import { A1A2_Cable_Gland_Table } from "./A1A2_Cable_Gland";

export const productDetailColumns: { [id: string]: any } = {
  A1A2_Cable_Gland: A1A2_Cable_Gland_Table,
  A1A2_Cable_Glands: A1A2_Cable_Glands_Table,
};

export interface IColumns {
  id: string;
  name: string;
  customeWidth: number;
  colSpan: number;
  align: string;
}
