import { render, screen } from "../../test-utils/testing-library-utils";
import Register from "../Register";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";
import { rest } from "msw";

test("page is showing Register as title", () => {
  render(<Register />);
  const heading = screen.getByRole("heading", { name: /register/i });
  expect(heading).toBeInTheDocument();
});

describe("fields validation", () => {
  test("validate all fields are empty", async () => {
    render(<Register />);
    const submitButton = screen.getByRole("button", { name: /register/i });
    userEvent.click(submitButton);
    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Username is required",
      "Password is required",
    ]);
  });
  test("username field empty only", async () => {
    render(<Register />);
    const submitButton = screen.getByRole("button", { name: /register/i });
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, "1234");
    userEvent.clear(confirmPasswordInput);
    userEvent.type(confirmPasswordInput, "1234");
    userEvent.click(submitButton);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Username is required",
    ]);
  });
  test("password field empty only", async () => {
    render(<Register />);
    const submitButton = screen.getByRole("button", { name: /register/i });
    const usernameInput = screen.getByLabelText(/username/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    userEvent.clear(usernameInput);
    userEvent.type(usernameInput, "kevintest");
    userEvent.clear(confirmPasswordInput);
    userEvent.type(confirmPasswordInput, "asdasd");
    userEvent.click(submitButton);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Password is required",
      "Confirm password not match",
    ]);
  });
  test("password and confirm password field have to be same", async () => {
    render(<Register />);
    const submitButton = screen.getByRole("button", { name: /register/i });
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    userEvent.clear(usernameInput);
    userEvent.type(usernameInput, "test");
    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, "1234");
    userEvent.clear(confirmPasswordInput);
    userEvent.type(confirmPasswordInput, "4321");
    userEvent.click(submitButton);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.map((alert) => alert.textContent)).toEqual([
      "Confirm password not match",
    ]);
  });
});

test("register API failed response", async () => {
  server.resetHandlers(
    rest.post(
      "https://green-thumb-64168.uc.r.appspot.com/register",
      (req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ status: "failed", error: "username already exists" })
        )
    )
  );
  render(<Register />);
  const submitButton = screen.getByRole("button", { name: /register/i });
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/^password$/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

  userEvent.clear(usernameInput);
  userEvent.type(usernameInput, "test");
  userEvent.clear(passwordInput);
  userEvent.type(passwordInput, "asdasd");
  userEvent.clear(confirmPasswordInput);
  userEvent.type(confirmPasswordInput, "asdasd");
  userEvent.click(submitButton);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(/username already exists/i);
});
