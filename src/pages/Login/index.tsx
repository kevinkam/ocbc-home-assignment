import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  CTAButton,
  PageTitle,
  StyledForm,
  SystemAlert,
} from "../../components/styled";
import FormField from "../../components/FormField";
import { useMutation } from "react-query";
import { login } from "../../api";
import classnames from "classnames";
import { useState } from "react";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const [serverError, setServerError] = useState<null | string>(null);
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const mutation = useMutation(
    (values: FormValues) =>
      login(values).catch((e) => {
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
      <div className="actions">
        <CTAButton type="submit">LOGIN</CTAButton>
        <CTAButton as={Link} to="/register" className="inverted">
          REGISTER
        </CTAButton>
      </div>
    </StyledForm>
  );
};

export default Login;
