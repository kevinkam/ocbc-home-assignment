import { currencyFormatter } from "./index";

test("currencyFormatter function", () => {
  expect(currencyFormatter(12345678)).toBe("SGD 12,345,678.00");
  expect(currencyFormatter(12345678, false)).toBe("12,345,678.00");
});
