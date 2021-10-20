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
              transactionType: "transfer",
              receipient: {
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
              transactionType: "transfer",
              receipient: {
                accountNo: "4992-321-3321",
                accountHolder: "Tim Cook",
              },
            },
            {
              transactionId: "5",
              amount: 20,
              transactionDate: "2021-09-05T07:29:36.633Z",
              description: "Default money-in transaction",
              transactionType: "transfer",
              receipient: {
                accountNo: "4992-321-3321",
                accountHolder: "Tim Cook",
              },
            },
          ],
        })
      )
  ),
  rest.get(
    "https://green-thumb-64168.uc.r.appspot.com/payees",
    (req, res, ctx) =>
      res(
        ctx.json({
          status: "success",
          data: [
            {
              id: "616d65d1d1b6fd6f12aeede6",
              name: "Alvis",
              accountNo: "9226-178-8806",
            },
            {
              id: "616d65d1d1b6fd6f12aeede7",
              name: "Elsie",
              accountNo: "1265-467-6977",
            },
            {
              id: "616d65d1d1b6fd6f12aeede8",
              name: "Andy",
              accountNo: "6554-630-9653",
            },
            {
              id: "616d65d1d1b6fd6f12aeede9",
              name: "Mohammed",
              accountNo: "2833-703-6351",
            },
            {
              id: "616d65d1d1b6fd6f12aeedea",
              name: "Emmie",
              accountNo: "7174-429-2937",
            },
          ],
        })
      )
  ),
  rest.post(
    "https://green-thumb-64168.uc.r.appspot.com/transfer",
    (req, res, ctx) =>
      res(
        ctx.json({
          status: "success",
          transactionId: "616ee3e36596240a2c8f84a0",
          amount: 1000,
          description: "testing",
          recipientAccount: "9226-178-8806",
        })
      )
  ),
];
