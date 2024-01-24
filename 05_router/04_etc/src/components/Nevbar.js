import { NavLink } from "react-router-dom";


const Navbar = () => {

    const activeStyle = {
        backgroundColor:"purple",
        color: "white"
    }

    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/main" style={({isActive}) => isActive? activeStyle : null}>HOMSE</NavLink>
                    <NavLink to="/mypage" style={({isActive}) => isActive? activeStyle : null}>MYPAGE</NavLink>
                    <NavLink to="/login" style={({isActive}) => isActive? activeStyle : null}>LOGIN</NavLink>

                </li>
            </ul>
        </div>
    )

    
}
export default Navbar;