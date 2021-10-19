import { render, screen } from "../../../test-utils/testing-library-utils";
import Balance from "./";

test("have correct account number and balance", async () => {
  render(<Balance />);
  const balance = await screen.findByRole("heading", { name: "SGD 21,421.33" });
  expect(balance).toBeInTheDocument();

  const accountNo = await screen.findByText("3213-321-9923");
  expect(accountNo).toBeInTheDocument();
});
