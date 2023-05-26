export interface IProductCardProps {
  data: {
    id: number;
    title: string;
    info: string;
    image: string;
  };
  handleClick: () => void;
}
export interface IProductCardStates {}
