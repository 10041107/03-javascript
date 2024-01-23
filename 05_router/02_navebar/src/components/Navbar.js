import { NavLink } from "react-router-dom";


const Navbar=() =>{
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    const inactiveStyle = {}; 
    /*
    <NaLink컴포넌트 사용
    NavLink컴포넌트는 link컴포넌트와 사용이 거의 유사하다.
    그러나 현재 nav상태가 adcive인지에 대한 값을 이용하여 스타일을 조작하거나 클래스 이용을 변경할 수 있다.
    */
   
    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : inactiveStyle}>home</NavLink></li>
                <li><NavLink to="/main" style={({isActive}) => isActive ? activeStyle : inactiveStyle}>main</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive ? activeStyle : inactiveStyle}>mypage</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive ? activeStyle : inactiveStyle}>login</NavLink></li>
            </ul>
        </div>
    );
    
//  react에서 a태그를 이용하여 페이지 이동을 하는 경우
//  single page application에서 관리하고 있는 상태를 잃어버리게 된다.
    // return(
    //     <div>
    //         <ul>
    //             <li><a href={"/"}>home</a></li>
    //             <li><a href={"/main"}>main</a></li>
    //             <li><a href={"/mypage"}>mypage</a></li>
    //             <li><a href={"/login"}>login</a></li>

    //         </ul>
    //     </div>
    // )
        }

export default Navbar;