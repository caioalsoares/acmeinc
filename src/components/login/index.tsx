import { ErrorText, LoginContainer, LoginForm, LoginLabel } from "./style";
import userSVG from "../../assets/user.svg";
import passwordSVG from "../../assets/password.svg";
import telephoneSVG from "../../assets/telephone.svg";
import emailSVG from "../../assets/email.svg";
import { CartButton } from "../Common";
import { useState } from "react";
import InputMask from "react-input-mask";
import { LoginInfo, UserInfo, createUser, login } from "../../api/login";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    password: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUser(userInfo);
  };

  return (
    <LoginForm onSubmit={(e) => handleSubmit(e)}>
      <LoginLabel>
        <img src={userSVG} />
        <input
          placeholder="Nome"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
      </LoginLabel>
      <LoginLabel>
        <img src={passwordSVG} />
        <input
          placeholder="Senha"
          type="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </LoginLabel>
      <LoginLabel>
        <img src={passwordSVG} />
        <input placeholder="Repita a senha" type="password" />
      </LoginLabel>
      <LoginLabel>
        <img src={emailSVG} />
        <input
          placeholder="Email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
      </LoginLabel>
      <LoginLabel>
        <img src={telephoneSVG} />
        <InputMask
          placeholder="Telefone"
          mask="(99) 99999-9999"
          onChange={(e) =>
            setUserInfo({ ...userInfo, telephone: e.target.value })
          }
        />
      </LoginLabel>
      <CartButton>cadastre-se</CartButton>
    </LoginForm>
  );
};

const LogIn = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(loginInfo).isLogged ? navigate("/acmeinc/") : setLoginStatus("error");
  };

  return (
    <LoginForm onSubmit={(e) => handleSubmit(e)}>
      <LoginLabel>
        <img src={emailSVG} />
        <input
          placeholder="Email"
          value={loginInfo?.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        />
      </LoginLabel>
      <LoginLabel>
        <img src={passwordSVG} />
        <input
          placeholder="Senha"
          type="password"
          value={loginInfo?.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
      </LoginLabel>

      {loginStatus == "error" && <ErrorText>usuário ou senha não encontrado.</ErrorText>}

      <CartButton>login</CartButton>
    </LoginForm>
  );
};

const Login = () => {
  const [loginScreen, setLoginScreen] = useState("login");

  const handleScreen = (loginScreen: string) => {
    switch (loginScreen) {
      case "login": {
        return (
          <>
            <h1>Faça login para continuar comprando.</h1>
            <h2>
              Não tem Cadastro?{" "}
              <a onClick={() => setLoginScreen("signup")}>Crie sua conta</a>
            </h2>
            <LogIn />
          </>
        );
      }
      case "signup": {
        return (
          <>
            <h1>Crie sua conta e continue comprando.</h1>
            <h2>
              Já é cadastrado?{" "}
              <a onClick={() => setLoginScreen("login")}>Entre na sua conta</a>
            </h2>

            <SignUp />
          </>
        );
      }
      default: {
        return "unknown loginScreen type";
      }
    }
  };

  return <LoginContainer>{handleScreen(loginScreen)}</LoginContainer>;
};

export default Login;
