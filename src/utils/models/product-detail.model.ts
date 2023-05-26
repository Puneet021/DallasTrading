export interface IProductDetailData {
  id: string;
  productName: string;
  categoryName: string;
  description: IProductDetailDescription;
  productDetailTableData: IProductDetailTableData[];
  customerReviews: IProductDetailReviewsData[];
}

export interface IProductDetailDescription {
  Size: string;
  Standard: string;
  Application: string;
  Function: string;
  Material: string;
  optionalThreads: string;
  Finish: string;
  operatingTemp: string;
  Accessories: string;
}

export interface IProductDetailTableData {
  size: string;
  threadSizeC: {
    ThreadSizeC1: number;
    threadSizeC2: string;
  };
  minimumLengthOfThreadD: number;
  cableRange: { maxA: number; maxB: number };
}

export interface IProductDetailReviewsData {
  customerName: string;
  emailId: string;
  stars: number;
  comment: string;
}
