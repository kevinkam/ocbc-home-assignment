import classnames from "classnames";
import BackButton from "../../components/BackButton";
import {
  CTAButton,
  FloatingActions,
  PageTitle,
  StyledForm,
  SystemAlert,
} from "../../components/styled";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { submitTransfer } from "../../api";
import Payees from "./fields/Payees";
import Amount from "./fields/Amount";
import Description from "./fields/Description";
import { FormValues } from "./types";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Transfer = () => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const [systemError, setSystemError] = useState<string | null>(null);
  const methods = useForm<FormValues>();
  const mutation = useMutation(
    (data: FormValues) =>
      submitTransfer(data)
        .then(() => {
          queryClient.invalidateQueries("transactions");
          queryClient.invalidateQueries("balance");
          history.push("/");
        })
        .catch((e) => {
          const errorMessage =
            e?.response?.data?.error ||
            "Something went wrong, please try again later";
          setSystemError(
            errorMessage.slice(0, 1).toUpperCase() + errorMessage.slice(1)
          );
        }),
    {
      onMutate() {
        setSystemError(null);
      },
    }
  );
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };
  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classnames({ loading: mutation.isLoading })}
        noValidate
      >
        <BackButton />
        <PageTitle>Transfer</PageTitle>
        <Payees />
        <Amount />
        <Description />
        {systemError && <SystemAlert role="alert">{systemError}</SystemAlert>}
        <FloatingActions>
          <CTAButton type="submit" role="button">
            Transfer Now
          </CTAButton>
        </FloatingActions>
      </StyledForm>
    </FormProvider>
  );
};

export default Transfer;
