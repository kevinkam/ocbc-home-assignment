import FormField from "../../../components/FormField";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../types";

const Description = () => {
  const { register } = useFormContext<FormValues>();
  return (
    <FormField label="Description" name="description">
      <textarea id="description" {...register("description")} rows={5} />
    </FormField>
  );
};

export default Description;
