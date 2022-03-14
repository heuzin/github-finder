import { createContext, useReducer } from "react";
import { alertReducer, ALERT_INITIAL_STATE } from "./AlertReducer";
import { REMOVE_ALERT, SET_ALERT } from "./AlertTypes";

const AlertContext = createContext({
  msg: "",
  type: "",
  setAlert: (msg: string, type: string) => {},
});

type Props = {
  children: React.ReactNode;
};

export const AlertProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, ALERT_INITIAL_STATE);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{ msg: state.msg, type: state.type, setAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
