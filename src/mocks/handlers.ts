import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://green-thumb-64168.uc.r.appspot.com/balance",
    (req, res, ctx) =>
      res(
        ctx.json({
          status: "success",
          accountNo: "3213-321-9923",
          balance: 21421.33,
        })
      )
  ),
  rest.get(
    "https://green-thumb-64168.uc.r.appspot.com/transactions",
    (req, res, ctx) =>
      res(
        ctx.json({
          status: "success",
          data: [
            {
              transactionId: "1",
              amount: 1200,
              transactionDate: "2021-09-06T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "received",
              sender: {
                accountNo: "4992-321-3321",
                accountHolder: "Jackie",
              },
            },
            {
              transactionId: "2",
              amount: 310,
              transactionDate: "2021-09-06T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "transferred",
              sender: {
                accountNo: "4992-321-3321",
                accountHolder: "Tim Cook",
              },
            },
            {
              transactionId: "3",
              amount: 1200,
              transactionDate: "2021-09-05T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "received",
              sender: {
                accountNo: "4992-321-3321",
                accountHolder: "Jackie",
              },
            },
            {
              transactionId: "4",
              amount: 310,
              transactionDate: "2021-09-05T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "transferred",
              sender: {
                accountNo: "4992-321-3321",
                accountHolder: "Tim Cook",
              },
            },
            {
              transactionId: "5",
              amount: 20,
              transactionDate: "2021-09-05T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "transferred",
              sender: {
                accountNo: "4992-321-3321",
                accountHolder: "Tim Cook",
              },
            },
          ],
        })
      )
  ),
];
