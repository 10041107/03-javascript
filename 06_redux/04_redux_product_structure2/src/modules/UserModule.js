import { createActions, handleActions } from "redux-actions";

const initialState = {
  res: null,
};

export const LOGIN = "user/LOGIN";
export const RESET_LOGIN_USER = "user/RESET_LOGIN_USER";

export const { user: { login, resetLoginUser } } = createActions({
  [LOGIN]: (res) => ({ res }),
  [RESET_LOGIN_USER]: () => ({ res: null }), // Resetting to the initial state
});

const userReducer = handleActions(
  {
    [LOGIN]: (state, { payload: { res } }) => {
      if (res) {
        localStorage.setItem("isLogin", true);
      } else {
        res = { message: "LOGIN FAIL" };
      }
      return { ...state, res };
    },
    [RESET_LOGIN_USER]: (state) => initialState,
  },
  initialState
);

export default userReducer;
