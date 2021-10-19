interface UserData {
  token: string;
  username: string;
}
export const removeLocalUserData = () => {
  localStorage.removeItem("user-data");
};
export const updateLocalUserData = (data: UserData) => {
  localStorage.setItem("user-data", JSON.stringify(data));
};

export const getLocalUserData = (): null | UserData => {
  const json = localStorage.getItem("user-data");
  try {
    const data = JSON.parse(json!);
    if (typeof data.token === "string" && typeof data.username === "string") {
      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};

const formatter = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
});
export const currencyFormatter = (amount: number, withCurrency = true) =>
  formatter.format(amount).replace("$", withCurrency ? "SGD " : "");
