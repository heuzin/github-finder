import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../models/UserProps";
import { githubReducer, GITHUB_INITIAL_STATE } from "./GithubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  GET_USERS,
  SET_LOADING,
} from "./GithubTypes";

const GithubContext = createContext({
  users: [] as UserProps[],
  user: {} as UserProps,
  repos: [],
  loading: false,
  searchUsers: (text: string) => {},
  getUser: (login: string) => {},
  clearUsers: () => {},
  getUserRepos: (login: string) => {},
});

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type Props = {
  children: React.ReactNode;
};

export const GithubProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, GITHUB_INITIAL_STATE);

  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    dispatch({
      type: GET_USERS,
      payload: items,
    });
  };

  const getUser = async (login: string) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      window.location.href = "/notfound" as string;
    } else {
      const data = await res.json();

      dispatch({
        type: GET_USER,
        payload: data,
      });
    }
  };

  const getUserRepos = async (login: string) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: "10",
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
