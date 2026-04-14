import React, { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import DataTable from "../../Components/Admin/DataTable";
import { dashboard_data } from "../../assets/assets";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    draft: 0,
    recentBlog: [],
  });

  const dashboardDatafun = async () => {
    // e.preventDefault()
    setDashboardData(dashboard_data);
  };
  useEffect(() => {
    const dashboardefun = async () => await dashboardDatafun();
    dashboardefun();
  }, []);
  return (
    <div>
      <div className="flex-1 flex justify-center items-center  ">
        <div className="flex items-center gap-4 bg-white p-4 min-w-45  rounded shadow cursor-pointer hover:scale-105 transition-all ml-3 ">
          <MdOutlineEditCalendar size={25} className="text-primary/89" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-45 rounded shadow cursor-pointer hover:scale-105 transition-all mx-4">
          <FaRegCommentDots size={25} className="text-primary/89" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-400 font-light">comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded shadow cursor-pointer p-4 bg-white mix-w-45  hover:scale-105  transition-all px-15">
          <RiDraftFill size={25} className="text-primary/89" />
          <div>
            <p className="text-gray-600 font-semibold text-xl">
              {dashboardData.draft}
            </p>
            <p className="font-light text-gray-400">Draft</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <SiBlogger size={25} className="text-primary/85" />

          <p className="font-medium">Latest Blogs</p>
        </div>
        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
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
                dashboardData.recentBlog.map((blog, index) => {
                  return (
                    <DataTable
                      key={blog._id}
                      fetchBlogs={dashboardDatafun}
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
    </div>
  );
}

export default Dashboard;
