import { useForm } from "react-hook-form";
import {
  CTAButton,
  FloatingActions,
  PageTitle,
  StyledForm,
  SystemAlert,
} from "../../components/styled";
import FormField from "../../components/FormField";
import { useMutation } from "react-query";
import { submitRegister } from "../../api";
import classnames from "classnames";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import { useHistory } from "react-router-dom";
import { updateLocalUserData } from "../../utils";

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState<null | string>(null);
  const { register, handleSubmit, formState, getValues } =
    useForm<FormValues>();
  const mutation = useMutation(
    (values: Omit<FormValues, "confirmPassword">) =>
      submitRegister(values)
        .then((r) => {
          updateLocalUserData({
            token: r.data.token,
            username: values.username,
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
  const onSubmit = ({ confirmPassword, ...values }: FormValues) => {
    mutation.mutate(values);
  };
  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      className={classnames({ loading: mutation.isLoading })}
    >
      <BackButton />
      <PageTitle>Register</PageTitle>
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
      <FormField
        name="confirmPassword"
        label="Confirm Password"
        errorMessage={formState.errors.confirmPassword?.message}
      >
        <input
          id="confirmPassword"
          {...register("confirmPassword", {
            validate(value) {
              const password = getValues("password");
              return password !== value ? "Confirm password not match" : true;
            },
          })}
          type="password"
        />
      </FormField>
      {serverError && <SystemAlert role="alert">{serverError}</SystemAlert>}
      <FloatingActions>
        <CTAButton type="submit">REGISTER</CTAButton>
      </FloatingActions>
    </StyledForm>
  );
};

export default Register;
