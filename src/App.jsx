import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Layout from "./Pages/admin/Layout";
import Dashboard from "./Pages/admin/Dashboard";
import AddBlog from "./Pages/admin/AddBlog";
import ListBlog from "./Pages/admin/ListBlog";

import Comment from "./Pages/admin/Comment";
import Login from "./Components/Admin/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={ true ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="listblog" element={<ListBlog />} />
          <Route path="comment" element={<Comment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
