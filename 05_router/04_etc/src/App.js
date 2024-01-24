import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./layout/Layouts";
import Main from "./page/Main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";
import Error from "./page/Error";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="mypage" element={<Mypage/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
