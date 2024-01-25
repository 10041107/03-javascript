import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import Error from "./pages/Error";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Content />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;