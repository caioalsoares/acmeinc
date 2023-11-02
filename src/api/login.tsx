export interface UserInfo extends LoginInfo {
  telephone: string;
  name: string;
}
export interface LoginInfo {
  email: string;
  password: string;
}
export interface LoggedInInfo {
  isLogged: boolean;
  user: string;
}

export const createUser = (info: UserInfo) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(info);

  localStorage.setItem("users", JSON.stringify(users));
};

export const login = (info: LoginInfo): LoggedInInfo => {
  const users: LoginInfo[] = JSON.parse(localStorage.getItem("users") || "[]");

  const findUser = users.find((item) => item.email == info.email);

  const passwordValidation = !!findUser && findUser.password == info.password;

  console.log(!!passwordValidation, findUser?.password, info.password);

  passwordValidation && localStorage.setItem("loggedUser", info.email);

  return {
    isLogged: !!passwordValidation,
    user: findUser ? findUser.email : "",
  };
};
