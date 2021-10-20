import { getTransactions } from "../../../api";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { Transaction } from "../../../api/types";
import { Title, Wrapper } from "./styled";
import Card from "./Card";

const Transactions = () => {
  const query = useQuery("transactions", () =>
    getTransactions().then((r) => {
      return Array.from(r.data.data || [])
        .sort((a, b) => (a.transactionDate < b.transactionDate ? 1 : -1))
        .reduce<[string, Transaction[]][]>((r, item) => {
          const date = dayjs(item.transactionDate).format("D MMM YYYY");
          const lastIndex = r.length - 1;
          let lastDate: string | null = null;
          if (lastIndex > -1) {
            lastDate = r[lastIndex][0];
          }
          if (lastDate !== null && lastDate === date) {
            r[lastIndex] = [lastDate, r[lastIndex][1].concat(item)];
          } else {
            r.push([date, [item]]);
          }
          return r;
        }, []);
    })
  );
  return (
    <Wrapper>
      <Title>Your transaction history</Title>
      {query.data?.map(([date, list]) => (
        <Card key={date} date={date} list={list} />
      ))}
    </Wrapper>
  );
};

export default Transactions;
