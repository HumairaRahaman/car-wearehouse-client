import React from "react"

const StoreDataTable = () => {
  return (
    <div className=" mt-14 py-4 mx-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-col-1 gap-4 ">
      <div className="  bg-white rounded-lg shadow-lg shadow-amber-100 space-y-2 p-4">
        <div className="flex justify-around bg-gray-100 shadow ">
          <div className="py-3">
            <p className=" py-2 font-bold text-transparent  bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
              Daily Views
            </p>
            <p className=" pb-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              1,540
            </p>
          </div>
          <div className=" text-xl flex items-center w-12 h-12 content-center my-auto text-amber-800 rounded-full bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-700 hover:via-orange-500 hover:to-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  m-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-amber-100 rounded-lg shadow-lg space-y-2 p-4">
        <div className="flex justify-around bg-gray-100 shadow ">
          <div className="py-3">
            <p className=" py-2 font-bold text-transparent  bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
              Sales
            </p>
            <p className=" pb-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              54
            </p>
          </div>
          <div className=" text-xl flex items-center w-12 h-12 content-center my-auto text-amber-800 rounded-full bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-700 hover:via-orange-500 hover:to-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 mx-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-amber-100 rounded-lg shadow-lg space-y-2 p-4">
        <div className="flex justify-around bg-gray-100 shadow ">
          <div className="py-3">
            <p className=" py-2 font-bold text-transparent  bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
              Comments
            </p>
            <p className=" pb-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              240
            </p>
          </div>
          <div className=" text-xl flex items-center w-12 h-12 content-center my-auto text-amber-800 rounded-full bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-700 hover:via-orange-500 hover:to-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 mx-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="  bg-white shadow-amber-100 rounded-lg shadow-lg space-y-2 p-4">
        <div className="flex justify-around bg-gray-100 shadow ">
          <div className="py-3">
            <p className=" py-2 font-bold text-transparent  bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-center cursor-pointer">
              Earning
            </p>
            <p className=" pb-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              $784,540
            </p>
          </div>
          <div className=" text-xl flex items-center w-12 h-12 content-center my-auto text-amber-800 rounded-full bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-700 hover:via-orange-500 hover:to-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 m-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDataTable;
