import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import {
  CTAButton,
  FloatingActions,
  PageTitle,
  StyledForm,
  SystemAlert,
} from "../../components/styled";
import FormField from "../../components/FormField";
import { useMutation } from "react-query";
import { submitLogin } from "../../api";
import classnames from "classnames";
import { useState } from "react";
import { updateLocalUserData } from "../../utils";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState<null | string>(null);
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const mutation = useMutation(
    (values: FormValues) =>
      submitLogin(values)
        .then((r) => {
          updateLocalUserData({
            token: r.data.token,
            username: r.data.username,
          });
          history.replace("/");
        })
        .catch((e) => {
          const errorMessage =
            e?.response?.data?.error ||
            "Something went wrong, please try again later.";
          setServerError(
            errorMessage.slice(0, 1).toUpperCase() + errorMessage.slice(1)
          );
        }),
    {
      onMutate() {
        setServerError(null);
      },
      retry: false,
    }
  );
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };
  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      className={classnames({ loading: mutation.isLoading })}
    >
      <PageTitle>Login</PageTitle>
      <FormField
        name="username"
        label="Username"
        errorMessage={formState.errors.username?.message}
      >
        <input
          id="username"
          {...register("username", { required: "Username is required" })}
        />
      </FormField>
      <FormField
        name="password"
        label="Password"
        errorMessage={formState.errors.password?.message}
      >
        <input
          id="password"
          {...register("password", { required: "Password is required" })}
          type="password"
        />
      </FormField>
      {serverError && <SystemAlert role="alert">{serverError}</SystemAlert>}
      <FloatingActions>
        <CTAButton type="submit">LOGIN</CTAButton>
        <CTAButton as={Link} to="/register" className="inverted">
          REGISTER
        </CTAButton>
      </FloatingActions>
    </StyledForm>
  );
};

export default Login;
