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
    {list.map((item) => (
      <TransactionRow key={item.transactionId}>
        <div>
          <AccountHolder>{item.sender.accountHolder}</AccountHolder>
          <AccountNo>{item.sender.accountNo}</AccountNo>
        </div>
        <Amount className={item.transactionType}>
          {item.transactionType === "transferred" ? "- " : null}
          {currencyFormatter(item.amount, false)}
        </Amount>
      </TransactionRow>
    ))}
  </Wrapper>
);

export default Card;
