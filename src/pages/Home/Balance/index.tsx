import { currencyFormatter, getLocalUserData } from "../../../utils";
import {
  AccountTitle,
  AccountValue,
  BalanceAmount,
  BalanceTitle,
  Wrapper,
} from "./styled";
import { useBalance } from "../../../hooks";

const Balance = () => {
  const balanceQuery = useBalance();
  const userData = getLocalUserData();
  return (
    <Wrapper>
      <BalanceTitle>You have</BalanceTitle>
      <BalanceAmount>
        {balanceQuery.data?.balance
          ? currencyFormatter(balanceQuery.data?.balance)
          : null}
      </BalanceAmount>
      <AccountTitle>Account No</AccountTitle>
      <AccountValue>{balanceQuery.data?.accountNo}</AccountValue>
      <AccountTitle>Account Holder</AccountTitle>
      <AccountValue>{userData?.username}</AccountValue>
    </Wrapper>
  );
};

export default Balance;
