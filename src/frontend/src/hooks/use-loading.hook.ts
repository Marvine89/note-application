import { useSelector } from "react-redux";
import { createLoadingSelector } from "../redux/modules/loading/selectors";

export const useLoading = (...loadingActions: string[]) => {
  return useSelector(createLoadingSelector(loadingActions));
};
