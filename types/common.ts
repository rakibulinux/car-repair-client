export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type SelectOptions = {
  label: string;
  value: string;
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IUserInfoType = {
  emailId: string;
  exp: number;
  iat: number;
  password: string;
  role: string;
  userId: string;
};

export type IAdmin = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
