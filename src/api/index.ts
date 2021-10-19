import ajax from "../utils/ajax";
import {
  BalanceResponse,
  LoginPayload,
  LoginResponse,
  PayeesResponse,
  RegisterResponse,
  SubmitTransferPayload,
  TransactionsResponse,
} from "./types";

export const submitLogin = (data: LoginPayload) =>
  ajax.post<LoginResponse>("/login", data);

export const submitRegister = (data: LoginPayload) =>
  ajax.post<RegisterResponse>("/register", data);

export const getBalance = () => ajax.get<BalanceResponse>("/balance");
export const getTransactions = () =>
  ajax.get<TransactionsResponse>("/transactions");

export const getPayees = () => ajax.get<PayeesResponse>("/payees");

export const submitTransfer = (data: SubmitTransferPayload) =>
  ajax.post("/transfer", data);
