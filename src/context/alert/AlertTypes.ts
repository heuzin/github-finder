export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export interface SetAlert {
  type: typeof SET_ALERT;
  payload: {
    msg: string;
    type: string;
  };
}

export interface RemoveAlert {
  type: typeof REMOVE_ALERT;
}
