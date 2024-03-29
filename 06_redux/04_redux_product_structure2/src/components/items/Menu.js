import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callGetMenuListAPI } from "../../apis/menuAPICalls";

const Menu = ({id}) =>{
    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(callGetMenuListAPI(id));
    },[])

    return(
        menu && (
            <>
            <h3>메뉴 이름: {menu.menuName}</h3>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoruName}</h3>
            <h3>메뉴 상세: {menu.detail.description}</h3>
            <img src={menu.detail.image} style={{maxWidth500}} alt={menu.menuName} />
            </>
        )
    )
}

export default Menu;