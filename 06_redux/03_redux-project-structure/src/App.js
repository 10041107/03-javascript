
/*

추가 설치해야 하는 패키지 목록

react-router-dom : react프로젝트의 reuter를 처리할 수 있도록 함. (페이지 이동과 같은 기능 지원)
redux : 전역공간에 1가지의 상태를 두어 어플리케이션의 유지보수성을 증가하기 위한 기술
react-redux : redux를 react에서 사용할 수 있도록 별도의 훅스를 사용하기 위한 lib
redux-actions : redux의 reducer를 정의하기 위해서 사용하는 lib
redux-thunk : 비동기 작업을 처리할 떄 사용하는 미들웨어
redux-logger : 미들웨어에서 state의 상태 변화 및 action을 로그로 남겨 상태를 볼 수 있도록 함
 @redux-devtools/extension : 크롬의 별도 extenstion으로 설치되어 리덕스가 가지고 있는 장점 중 하나인
                              타임스냅샷? 시간의 상태에 따른 상태변화를 기록하고 돌릴 수 있는
                              (=state의 변화 내용을 기록함)을 이용하여 이전의 상태로 돌아가거나 현재의 상태를 표시하는 툴
                              */

import {Router,Routes,BrowserRouter} from "react-router-dom";
import Pokemon from "./page/Pokemon";
import Main from "./page/Main";
import Layout from "./layout/Layout";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="pokemon" element={<Pokemon/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
