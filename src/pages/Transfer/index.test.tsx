import { render, screen } from "../../test-utils/testing-library-utils";
import Transfer from "./";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("validate transfer form", () => {
  test("all empty", async () => {
    render(<Transfer />);
    const payeeSelect = await screen.findByLabelText(/payee/i);
    expect(payeeSelect).toBeInTheDocument();

    const amountInput = await screen.findByLabelText(/amount/i);
    expect(amountInput).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /transfer now/i });
    userEvent.click(button);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Amount is required",
    ]);
  });
  test("amount is empty", async () => {
    render(<Transfer />);
    await screen.findByLabelText(/amount/i);
    const payeeSelect = await screen.findByLabelText(/payee/i);
    userEvent.selectOptions(payeeSelect, "6554-630-9653");

    const button = screen.getByRole("button", { name: /transfer now/i });
    userEvent.click(button);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Amount is required",
    ]);
  });

  test("Invalid amount", async () => {
    render(<Transfer />);
    await screen.findByLabelText(/payee/i);
    const amountInput = screen.getByLabelText(/amount/i);
    userEvent.clear(amountInput);
    userEvent.type(amountInput, "-1000");

    const button = screen.getByRole("button", { name: /transfer now/i });
    userEvent.click(button);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Minimum amount is 0.01",
    ]);
  });
});

test("transfer API failed", async () => {
  server.use(
    rest.post(
      "https://green-thumb-64168.uc.r.appspot.com/transfer",
      (req, res, ctx) =>
        res(
          ctx.status(404),
          ctx.json({
            status: "failed",
            error: "payee not found",
          })
        )
    )
  );
  render(<Transfer />);
  const payeeSelect = await screen.findByLabelText(/payee/i);
  userEvent.selectOptions(payeeSelect, "6554-630-9653");
  const amountInput = await screen.findByLabelText(/amount/i);
  userEvent.clear(amountInput);
  userEvent.type(amountInput, "1000");

  const button = screen.getByRole("button", { name: /transfer now/i });
  userEvent.click(button);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent("Payee not found");
});
