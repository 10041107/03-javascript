import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuListAPI } from "../redux/actions"; // Import your action creator
import MenuItem from "./MenuItem"; // Assuming you have a MenuItem component

const MenuList = () => {
  const result = useSelector((state) => state.menuReducer); // Assuming it's "menuReducer" instead of "monuReducer"
  const menuList = result.menuList;
  const dispatch = useDispatch();

  console.log(menuList);

  useEffect(() => {
    dispatch(callGetMenuListAPI());
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    menuList && (
      <div className="menuBox">
        {menuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </div>
    )
  );
};

export default MenuList;
