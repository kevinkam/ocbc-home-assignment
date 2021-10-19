import { render, screen } from "../../../test-utils/testing-library-utils";
import Transactions from "./";

test("there will be two groups of data", async () => {
  render(<Transactions />);
  const groups = await screen.findAllByRole("group");
  expect(groups).toHaveLength(2);
});
