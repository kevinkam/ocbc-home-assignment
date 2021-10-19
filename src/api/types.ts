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

interface Sender {
  accountNo: string;
  accountHolder: string;
}
export interface Transaction {
  transactionId: string;
  amount: number;
  transactionDate: string;
  description: string;
  transactionType: string;
  sender: Sender;
}
export interface TransactionsResponse {
  status: string;
  data: Transaction[];
}

export interface BalanceResponse {
  status: string;
  accountNo: string;
  balance: number;
}

export interface Payee {
  id: string;
  name: string;
  accountNo: string;
}
export interface PayeesResponse {
  status: string;
  data: Payee[];
}
export interface SubmitTransferPayload {
  receipientAccountNo: string;
  amount: number;
  description: string;
}
