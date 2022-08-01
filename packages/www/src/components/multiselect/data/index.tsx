import { Spinner } from "../../spinner";
import { useApi } from "../../../api/use-api";
import { MultiSelectWidget, MultiSelectEntity } from "../widget";

export function useMultiSelectData() {
  const endpoint = ` https://api.publicapis.org/entries`;
  return useApi<MultiSelectEntity>(endpoint);
}

export function MultiSelectData() {
  const { isLoading, data, error } = useMultiSelectData();

  return isLoading ? (
    <Spinner />
  ) : (
    <MultiSelectWidget data={data} error={error?.message} />
  );
}

export default MultiSelectData;
