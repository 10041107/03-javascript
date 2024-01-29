import { request } from "../Api";
import { getMenulist } from "../modules/MenuModule.js";

export function callGetMenuListAPI(){
    console.log("getmenuListAPI Calls");
}
return async(dispatch, getState) => {
    const result = await request("get", "/menu");
    console.log("getmenuList result" , result );
    dispatch(getMenulist(result)); 
}