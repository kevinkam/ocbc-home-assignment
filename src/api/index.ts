import ajax from "../utils/ajax";
import { LoginPayload } from "./types";

export const login = (data: LoginPayload) => ajax.post("/login", data);
