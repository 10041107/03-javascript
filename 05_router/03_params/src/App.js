import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import MenuDetails from "./pages/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";
import Menu from "./pages/Menu";

function App() {
  // npm i react-router-dom
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="main" element={<Main/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="menu">
        <Route index element={<Menu/>}/>
        <Route path=":menuCode" element={<MenuDetails/>}/>
        <Route path=":search" element={<MenuSearchResult/>}/>
        </Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
