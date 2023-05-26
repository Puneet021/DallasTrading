import { IProductDetailTableData } from "../../../utils/models/product-detail.model";

export interface IProductDetailTableProps {
  productDetailTableData: IProductDetailTableData[];
}
export interface IProductDetailTableStates {}

export const columns1: {
  id: string;
  name: string;
  customeWidth: number;
  colSpan: number;
  align: string;
}[] = [
  {
    id: "size",
    name: "Size",
    customeWidth: 100,
    colSpan: 1,
    align: "center",
  },
  {
    id: "threadSizeC",
    name: "Thread Size ‘C’",
    customeWidth: 100,
    colSpan: 2,
    align: "center",
  },
  {
    id: "minimumLengthOfThreadD",
    name: "Minimum Length of Thread ‘D’",
    customeWidth: 100,
    colSpan: 1,
    align: "center",
  },
  {
    id: "cableRange",
    name: "Cable Range",
    customeWidth: 100,
    colSpan: 2,
    align: "center",
  },
];

export const columns2: {
  id: string;
  name: string;
  customeWidth: number;
  colSpan: number;
  align: string;
}[] = [
  {
    id: "size",
    name: " ",
    customeWidth: 100,
    colSpan: 1,
    align: "center",
  },
  {
    id: "threadSizeC1",
    name: "Thread Size ‘C’",
    customeWidth: 50,
    colSpan: 1,
    align: "center",
  },
  {
    id: "threadSizeC2",
    name: "Thread Size ‘C’",
    customeWidth: 50,
    colSpan: 1,
    align: "center",
  },
  {
    id: "minimumLengthOfThreadD",
    name: "Minimum Length of Thread ‘D’",
    customeWidth: 100,
    colSpan: 1,
    align: "center",
  },
  {
    id: "maxA",
    name: "MAX ‘A’",
    customeWidth: 50,
    colSpan: 1,
    align: "center",
  },
  {
    id: "maxB",
    name: "MAX ‘B’",
    customeWidth: 50,
    colSpan: 1,
    align: "center",
  },
];
