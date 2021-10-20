import FormField from "../../../components/FormField";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";
import { getPayees } from "../../../api";
import { FormValues } from "../types";

const Payees = () => {
  const { formState, register, setValue } = useFormContext<FormValues>();
  const query = useQuery("payees", () => getPayees().then((r) => r.data), {
    onSuccess(data) {
      setValue("receipientAccountNo", data.data[0].accountNo);
    },
  });
  return !!query.data ? (
    <FormField
      name="receipientAccountNo"
      label="Payee"
      errorMessage={formState.errors.receipientAccountNo?.message}
    >
      <select id="receipientAccountNo" {...register("receipientAccountNo")}>
        {query.data?.data.map((payee) => (
          <option key={payee.id} value={payee.accountNo}>
            {payee.name}
          </option>
        ))}
      </select>
    </FormField>
  ) : null;
};

export default Payees;
