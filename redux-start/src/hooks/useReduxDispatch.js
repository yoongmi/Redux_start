import { useContext } from "react";
import ReduxContext from "../context/ReduxContext";

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}
export default useReduxDispatch;
