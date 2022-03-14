import { UserProps } from "../../models/UserProps";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_REPOS = "GET_REPOS";
export const SET_LOADING = "SET_LOADING";
export const CLEAR_USERS = "CLEAR_USERS";

export interface GetUsers {
  type: typeof GET_USERS;
  payload: UserProps[];
}

export interface GetUser {
  type: typeof GET_USER;
  payload: UserProps;
}

export interface GetRepos {
  type: typeof GET_REPOS;
  payload: [];
}

export interface SetLoading {
  type: typeof SET_LOADING;
}

export interface ClearUsers {
  type: typeof CLEAR_USERS;
}
