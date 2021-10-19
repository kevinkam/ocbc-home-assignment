interface UserData {
  token: string;
  username: string;
  accountNo: string;
}
export const updateLocalUserData = (data: UserData) => {
  localStorage.setItem("user-data", JSON.stringify(data));
};

export const getLocalUserData = () => {
  const json = localStorage.getItem("user-data");
  try {
    const data = JSON.parse(json!);
    if (
      typeof data.token === "string" &&
      typeof data.username === "string" &&
      typeof data.accountNo === "string"
    ) {
      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};
