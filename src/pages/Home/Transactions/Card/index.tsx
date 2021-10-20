import {
  AccountHolder,
  AccountNo,
  Amount,
  DateTitle,
  TransactionRow,
  Wrapper,
} from "./styled";
import React from "react";
import { Transaction } from "../../../../api/types";
import { currencyFormatter } from "../../../../utils";

interface CardProps {
  date: string;
  list: Transaction[];
}
const Card: React.FC<CardProps> = ({ date, list }) => (
  <Wrapper role="group">
    <DateTitle>{date}</DateTitle>
    {list.map((item) => {
      const isReceived = item.transactionType === "received";
      const account = isReceived ? item.sender : item.receipient;
      return (
        <TransactionRow key={item.transactionId}>
          <div>
            <AccountHolder>{account.accountHolder}</AccountHolder>
            <AccountNo>{account.accountNo}</AccountNo>
          </div>
          <Amount className={item.transactionType}>
            {!isReceived ? "- " : null}
            {currencyFormatter(item.amount, false)}
          </Amount>
        </TransactionRow>
      );
    })}
  </Wrapper>
);

export default Card;
