import { useQuery } from "react-query";
import { getBalance } from "../api";

export function useBalance() {
  return useQuery("balance", () => getBalance().then((r) => r.data));
}
