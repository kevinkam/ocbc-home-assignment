import { render, screen } from "../../test-utils/testing-library-utils";
import Login from "./";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import { rest } from "msw";

test("page is showing Login as title", () => {
  render(<Login />);
  const heading = screen.getByRole("heading", { name: /login/i });
  expect(heading).toBeInTheDocument();
});
describe("empty fields validation", () => {
  test("validate both fields are empty", async () => {
    render(<Login />);
    const submitButton = screen.getByRole("button", { name: /login/i });
    userEvent.click(submitButton);
    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Username is required",
      "Password is required",
    ]);
  });
  test("password field empty only", async () => {
    render(<Login />);
    const submitButton = screen.getByRole("button", { name: /login/i });
    const usernameInput = screen.getByLabelText(/username/i);

    userEvent.clear(usernameInput);
    userEvent.type(usernameInput, "kevintest");
    userEvent.click(submitButton);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Password is required",
    ]);
  });
  test("username field empty only", async () => {
    render(<Login />);
    const submitButton = screen.getByRole("button", { name: /login/i });
    const passwordInput = screen.getByLabelText(/password/i);

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, "1234");
    userEvent.click(submitButton);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Username is required",
    ]);
  });
});

test("login API failed response", async () => {
  server.resetHandlers(
    rest.post(
      "https://green-thumb-64168.uc.r.appspot.com/login",
      (req, res, ctx) =>
        res(
          ctx.status(404),
          ctx.json({ status: "failed", error: "user not found" })
        )
    )
  );
  render(<Login />);
  const submitButton = screen.getByRole("button", { name: /login/i });
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);

  userEvent.clear(usernameInput);
  userEvent.type(usernameInput, "test");
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, "asdasd");
  userEvent.click(submitButton);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(/user not found/i);
});
