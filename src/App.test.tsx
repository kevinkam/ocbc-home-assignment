import { render, screen } from "./test-utils/testing-library-utils";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("flow from register to transfer", async () => {
  render(<App />);

  const loginHeading = await screen.findByRole("heading", { name: /login/i });
  expect(loginHeading).toBeInTheDocument();

  const registerLink = screen.getByRole("button", { name: /register/i });
  userEvent.click(registerLink);

  const registerHeading = await screen.findByRole("heading", {
    name: /register/i,
  });
  expect(registerHeading).toBeInTheDocument();
  const usernameInput = screen.getByLabelText("Username");
  userEvent.clear(usernameInput);
  userEvent.type(usernameInput, "test");

  const passwordInput = screen.getByLabelText("Password");
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, "asdasd");

  const confirmPasswordInput = screen.getByLabelText("Confirm Password");
  userEvent.clear(confirmPasswordInput);
  userEvent.type(confirmPasswordInput, "asdasd");

  const registerButton = screen.getByRole("button", { name: "REGISTER" });
  userEvent.click(registerButton);

  const balanceHeading = await screen.findByRole("heading", {
    name: /SGD 21,421\.33/,
  });
  expect(balanceHeading).toBeInTheDocument();

  const makeTransferLink = screen.getByRole("button", {
    name: "Make Transfer",
  });
  userEvent.click(makeTransferLink);

  const transferHeading = await screen.findByRole("heading", {
    name: "Transfer",
  });
  expect(transferHeading).toBeInTheDocument();

  const payeeSelect = await screen.findByLabelText("Payee");
  userEvent.selectOptions(payeeSelect, "9226-178-8806");

  const amountInput = await screen.findByLabelText("Amount");
  userEvent.clear(amountInput);
  userEvent.type(amountInput, "1000");

  const descriptionInput = await screen.findByLabelText("Description");
  userEvent.clear(descriptionInput);
  userEvent.type(descriptionInput, "test description");

  const transferNowButton = screen.getByRole("button", {
    name: "Transfer Now",
  });
  userEvent.click(transferNowButton);

  const balanceHeadingAfterTransfer = await screen.findByRole("heading", {
    name: /SGD 21,421\.33/,
  });
  expect(balanceHeadingAfterTransfer).toBeInTheDocument();

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  userEvent.click(logoutButton);

  const loginHeadingAfterLogout = await screen.findByRole("heading", {
    name: /login/i,
  });
  expect(loginHeadingAfterLogout).toBeInTheDocument();
});

test("login flow", async () => {
  render(<App />);

  const usernameInput = screen.getByLabelText("Username");
  userEvent.clear(usernameInput);
  userEvent.type(usernameInput, "test");

  const passwordInput = screen.getByLabelText("Password");
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, "asdasd");

  const loginButton = screen.getByRole("button", { name: "LOGIN" });
  userEvent.click(loginButton);

  const balanceHeading = await screen.findByRole("heading", {
    name: /SGD 21,421\.33/,
  });
  expect(balanceHeading).toBeInTheDocument();
});
