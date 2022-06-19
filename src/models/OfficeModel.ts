export interface OfficeModel {
  id: number;
  name: string;
  address: string,
  mobileNumber: string;
  email: string;
}

export interface OfficeModelList {
  data: OfficeModel[]
}