import { A1A2_Cable_Glands_Table } from "./A1A2_Cable_Glands";
import { A1A2_Cable_Gland_Table } from "./A1A2_Cable_Gland";
import { ThreeMLV_Resin_Joint_Kit } from "./3MLV_Resin_Joint_Kit";

export const productDetailColumns: { [id: string]: any } = {
  A1A2_Cable_Gland: A1A2_Cable_Gland_Table,
  A1A2_Cable_Glands: A1A2_Cable_Glands_Table,
  "3M_LV_Resin_Joint_Kit": ThreeMLV_Resin_Joint_Kit,
};

export interface IColumns {
  id: string;
  name: string;
  customeWidth: number;
  colSpan: number;
  align: string;
}
