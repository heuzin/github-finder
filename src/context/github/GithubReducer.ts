import { UserProps } from "../../models/UserProps";
import {
  GET_USERS,
  GetUsers,
  SetLoading,
  SET_LOADING,
  ClearUsers,
  CLEAR_USERS,
  GetUser,
  GET_USER,
  GetRepos,
  GET_REPOS,
} from "./GithubTypes";

export interface githubState {
  users: UserProps[];
  user: UserProps;
  repos: [];
  loading: boolean;
}

export const GITHUB_INITIAL_STATE: githubState = {
  users: [] as UserProps[],
  user: {} as UserProps,
  repos: [],
  loading: false,
};

export const githubReducer = (
  state: githubState = GITHUB_INITIAL_STATE,
  action: GetUsers | GetUser | GetRepos | SetLoading | ClearUsers
) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
