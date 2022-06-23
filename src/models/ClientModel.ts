export interface ClientModel {
  id: number;
  testimonial: string;
  name: string;
  role: string;
  image: string;
}

export interface ClientListModel {
  data: ClientModel[]
}