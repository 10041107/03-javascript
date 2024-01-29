import { Navigate } from "react-router-dom";
import MenuRegistForm from "./from/MenuRegistForm";

const MenuRegist = () =>{
    const loginStatus = !!localStorage.getItem("isLogin");
    if(!loginStatus){
        return<Navigate to="/login" replace={true}/>
    }
    return(
        <div>
        <h1> 메뉴 등록 페이지</h1>
        <MenuRegistForm/>
        </div>
    )
}

export default MenuRegist;