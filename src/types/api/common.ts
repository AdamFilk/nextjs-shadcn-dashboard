export interface ApiResponse<T> {
  status: string;
  data: T;
}

export interface ApiError {
  status: string;
  error: {
    error_code: number;
    message: string;
  };
}
