import ajax from "../utils/ajax";
import { LoginPayload, LoginResponse, RegisterResponse } from "./types";

export const submitLogin = (data: LoginPayload) =>
  ajax.post<LoginResponse>("/login", data);

export const submitRegister = (data: LoginPayload) =>
  ajax.post<RegisterResponse>("/register", data);
