import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index/>
      <Route path="login"/>
      <Route path="mypage"/>
      <Route path="bloghome"/>
      <Route path="blogpage1"/>
      </Route>

      <Route path="*" element={<Error/>}/>      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
