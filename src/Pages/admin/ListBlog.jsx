import React, { useEffect, useState } from "react";
import { categoryData } from "../../assets/assets";
import DataTable from "../../Components/Admin/DataTable";

function ListBlog() {
  const [blogs, setBlog] = useState([]);
  const fechBlogs = async () => {
    setBlog(categoryData);
  };
  useEffect(() => {
    const fechedData = async () => await fechBlogs();
    fechedData();
  }, []);
  return (
    <div className="pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1 >All Blogs</h1>
      <div className="relative h-4/5   mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              //    console.log( dashboardData)
              blogs.map((blog, index) => {
                return (
                  <DataTable
                    key={blog._id}
                    fetchBlogs={fechBlogs}
                    index={index + 1}
                    blog={blog}
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBlog;
