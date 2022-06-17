interface Classes {
  border: string,
  bg: string
}

export interface WorkModel {
  id: number;
  img: string;
  classes: Classes,
  title: string;
  description?: string;
  type?: string;
  link?: string;
}

export interface WorkModelList {
  data: WorkModel[]
}