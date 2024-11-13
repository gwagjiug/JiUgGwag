export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginSuccessResponse {
  result: {
    token: string;
  };
}

export interface LoginErrorResponse {
  code: string;
  message?: string;
}
