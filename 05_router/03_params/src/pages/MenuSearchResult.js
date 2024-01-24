import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMenu } from "../api/MenuApi";
import boxStyle from"./Menu_module.css";
import MenuItem from "../components/MenuItem";

const MenuSearchDefault = () =>{
    const [search] = useSearchParams();
    const searchMenuName = search.get("menuName");
    const [menuList,setMenuList] = useState([]);


    /*
        pathVariable// http:localhost/menu/30
        queryString Params// http:localhost/menu?menuName="김치튀김"&menuPrice=500
    */
    useEffect(
        ()=>{
            setMenuList(searchMenu(searchMenuName));

        },[]
    )
    return(
        <>
        <div>
            <h1>검색 결과</h1>
            <div className={boxStyle.Menubox}>
                {menuList.map(menu=> <MenuItem key={menu.menuCode()}></MenuItem>)}
            </div>
        </div>
        </>
    )


}

export default MenuSearchDefault;