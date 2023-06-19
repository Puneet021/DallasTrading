export interface IProductDetailData {
  id: string;
  image: string;
  productName: string;
  Specification: {
    extraSpecTitle: string;
    extraSpec: string[];
    specification: string[];
  }[];
  detail: string[];
  company: string[];
  companyImg: string[];
  categoryName: string;
  description: IProductDetailDescription;
  productDetailTableData: any;
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

export interface IProductDetailReviewsData {
  customerName: string;
  emailId: string;
  stars: number;
  comment: string;
}
