export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  accountNo: string;
  status: string;
  token: string;
  username: string;
}

export interface RegisterResponse
  extends Pick<LoginResponse, "status" | "token"> {}
