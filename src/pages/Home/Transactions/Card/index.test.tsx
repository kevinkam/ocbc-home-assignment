import { render, screen } from "../../../../test-utils/testing-library-utils";
import Card from "./index";

test("amount got correct className", () => {
  render(
    <Card
      date="6 Sep 2021"
      list={[
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
      ]}
    />
  );
  const group = screen.getByRole("group");
  expect(group.childNodes[1].childNodes[1]).toHaveClass("received");
  expect(group.childNodes[2].childNodes[1]).toHaveClass("transferred");
});
