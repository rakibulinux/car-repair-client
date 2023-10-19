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
export type SelectOptionsBool = {
  label: string;
  value: boolean;
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
export type UserData = {
  user: {
    name: string | undefined;
    email: string | undefined;
    image: string | undefined;
  };
  accessToken: string;
  userId: string;
  emailId: string;
  role: string;
  password: string;
  iat: number;
  exp: number;
  jti: string;
};

export type IService = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  availability: "Available" | "Upcoming";
  location?: string;
  image: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

type BookingStatus = "PENDING" | "FIXING" | "FIXED" | "CANCELED";

export type IBooking = {
  id: string;
  userId: string;
  serviceId: string;
  status: BookingStatus;
  dateTime: Date;
  createdAt: Date;
  updatedAt: Date;
};
export type ICategory = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string | null;
};
export type IFeedback = {
  id: string;
  comment: string;
  suggestion: string;
  user: IAdmin;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
export type IPost = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string | null;
  categoryId: string;
};
export type IReview = {
  id: string;
  userId: string;
  serviceId: string;
  rating: number;
  comment: string | null;
  createdAt: Date;
  updatedAt: Date;
};
