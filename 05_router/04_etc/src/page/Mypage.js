import { Navigate } from "react-router-dom";

const Mypage = () =>{
    const isLogin = false;

    if(!isLogin) {
        /*
        컴포넌트 내에서 권한이나 다른 특정 상황에 의해 다른 페이지로 연동하고 싶을 때
        NAvegate컴포넌트를 사용할 수 있다.

        useNavigete와 Navigate중에 선택하면 된다.
        */
       return <Navigate to="/login/"/>
    }

    return(
        <div>
            <h1>마이페이지</h1>

        </div>
    )
}

export default Mypage;