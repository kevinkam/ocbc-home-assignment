import { useQuery } from "react-query";
import { getBalance } from "../../../api";
import { currencyFormatter, getLocalUserData } from "../../../utils";
import {
  AccountTitle,
  AccountValue,
  BalanceAmount,
  BalanceTitle,
  Wrapper,
} from "./styled";

const Balance = () => {
  const query = useQuery("balance", () => getBalance().then((r) => r.data));
  const userData = getLocalUserData();
  return (
    <Wrapper>
      <BalanceTitle>You have</BalanceTitle>
      <BalanceAmount>
        {query.data?.balance ? currencyFormatter(query.data?.balance) : null}
      </BalanceAmount>
      <AccountTitle>Account No</AccountTitle>
      <AccountValue>{query.data?.accountNo}</AccountValue>
      <AccountTitle>Account Holder</AccountTitle>
      <AccountValue>{userData?.username}</AccountValue>
    </Wrapper>
  );
};

export default Balance;
