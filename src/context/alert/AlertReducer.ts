import { RemoveAlert, REMOVE_ALERT, SetAlert, SET_ALERT } from "./AlertTypes";

export interface AlertState {
  msg: string;
  type: string;
}

export const ALERT_INITIAL_STATE: AlertState = {
  msg: "",
  type: "",
};

export const alertReducer = (
  state: AlertState = ALERT_INITIAL_STATE,
  action: SetAlert | RemoveAlert
) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        msg: action.payload.msg,
        type: action.payload.type,
      };
    case REMOVE_ALERT:
      return {
        ...ALERT_INITIAL_STATE,
      };
    default:
      return state;
  }
};
