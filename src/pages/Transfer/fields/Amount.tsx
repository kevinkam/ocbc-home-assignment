import { useFormContext } from "react-hook-form";
import FormField from "../../../components/FormField";
import { useBalance } from "../../../hooks";
import { FormValues } from "../types";

const Amount = () => {
  const { register, formState } = useFormContext<FormValues>();
  const balanceQuery = useBalance();
  return balanceQuery.data ? (
    <FormField
      label="Amount"
      name="amount"
      errorMessage={formState.errors.amount?.message}
    >
      <input
        type="number"
        id="amount"
        min={0.01}
        pattern="^\d*(\.\d{0,2})?$"
        {...register("amount", {
          required: "Amount is required",
          valueAsNumber: true,
          validate(value) {
            const numberedValue = Number(value);
            if (numberedValue < 0.01) {
              return "Minimum amount is 0.01";
            }
            if (balanceQuery.data.balance < value) {
              return "Amount cannot exceed your balance";
            }
            return true;
          },
        })}
      />
    </FormField>
  ) : null;
};

export default Amount;
