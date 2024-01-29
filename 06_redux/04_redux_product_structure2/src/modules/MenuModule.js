import { createActions, handleActions } from "redux-actions";

const initialState = {
  menuList: [],
  menu: null,
  regist: null,
  modify: null,
  delete: null,
};

const GET_MENULIST = "menu/GET_MENULIST";
const GET_MENU = "menu/GET_MENU";
const REGIST_MENU = "menu/REGIST_MENU";
const MODIFY_MENU = "menu/MODIFY_MENU";
const DELETE_MENU = "menu/DELETE_MENU";

export const {
  menu: { getMenulist, getMenu, registMenu, modifyMenu, deleteMenu },
} = createActions({
  [GET_MENULIST]: (res) => ({ menuList: res }),
  [GET_MENU]: (res) => ({ menu: res }),
  [REGIST_MENU]: (res) => ({ regist: res }),
  [MODIFY_MENU]: (res) => ({ modify: res }),
  [DELETE_MENU]: (res) => ({ delete: res }),
});

// 리듀서 함수
const menuReducer = handleActions(
  {
    [GET_MENULIST]: (state, { payload }) => ({
      ...state,
      menuList: payload.menuList,
    }),
    [GET_MENU]: (state, { payload }) => ({ ...state, menu: payload.menu }),
    [REGIST_MENU]: (state, { payload }) => ({ ...state, regist: payload.regist }),
    [MODIFY_MENU]: (state, { payload }) => ({ ...state, modify: payload.modify }),
    [DELETE_MENU]: (state, { payload }) => ({ ...state, delete: payload.delete }),
  },
  initialState
);

export default menuReducer;
