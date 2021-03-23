import { useReducer, createContext } from "react";
import axios from "axios";

const initialState = {
  users: [],
  fetching: false,
  error: "",
};

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
      };
  }
  return state;
};

export const UsersContext = createContext();

const createActions = (dispatch) => {
  const actions = {
    // async await
    fetchUsers: async () => {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        return dispatch({ type: FETCH_USERS_SUCCESS, payload: users.data });
      } catch (err) {
        return dispatch({
          type: FETCH_USERS_ERROR,
        });
      }
    },
  };

  return actions;
};

const UsersProvider = (props) => {
  const [usersState, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        usersState: usersState,
        usersActions: createActions(dispatch),
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
