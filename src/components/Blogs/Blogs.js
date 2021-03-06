import React from "react"

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="">
        <div>
          <h1 className="text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
            Basic Questions
          </h1>
          <p className="mt-10 mb-3 font-semibold text-2xl text-amber-800">
            🙋.What Is the Difference Between Sql and NoSql databases?
          </p>
          <div className="my-14 hidden md:hidden lg:hidden xl:block overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6  py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe"
                  >
                    Sql
                  </th>
                  <th
                    scope="col"
                    className="px-6  py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe"
                  >
                    NoSQL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    1.It is categorized as Relational Database Management System
                    .
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    1.It is categorized as Non-relational or distributed
                    database system.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    2.This databases have fixed or static or predefined schema.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    2.This databases have dynamic schema.tables so it is known
                    as <br />
                    table-based database.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    3.This databases display data in form of tables so it is
                    known <br />
                    as table-based database.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    3.This databases display data as collection of key-value
                    pair, documents,
                    <br /> graph databases or wide-column stores. NoSQL
                    databases are
                    <br /> horizontally scalable.
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    4.This databases are vertically scalable SQL databases are
                    not best
                    <br /> suited for hierarchical data storage.
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    4.NoSQL databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* //mobile */}
          <div className=" grid sm:grid-cols-2 grid-col-1 gap-4 xl:hidden">
              <div className=" bg-white rounded-lg shadow-lg space-y-2 p-4">
                <div className=" bg-gray-100 shadow ">
                  <p className=" py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                  SQL
                  </p>
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                1.It is categorized as Relational Database Management System .
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                2.This databases have fixed or static or predefined schema.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">3.This databases display data in form of tables so it is known
as table-based database.</div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                4.This databases are vertically scalable SQL databases are not best
suited for hierarchical data storage.
                </div>
               
              </div>
              <div className=" bg-white rounded-lg shadow-lg space-y-2 p-4">
                <div className=" bg-gray-100 shadow ">
                  <p className=" py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                  NOSQL
                  </p>
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                1.It is categorized as Non-relational or distributed database system.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                2.This databases have dynamic schema.tables so it is known as
table-based database.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">3.This databases display data as collection of key-value pair, documents,
graph databases or wide-column stores. NoSQL databases are
horizontally scalable.</div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                4.NoSQL databases are best suited for hierarchical data storage.
                </div>
               
              </div>
            </div>
          <div className="my-16">
            <p className="mt-10 mb-3 font-semibold text-2xl text-amber-800">
              🙋.When should you use nodejs and when should you use mongodb?
            </p>
            <p className="text-gray-600">
              The MongoDB Node.js Driver allows you to easily interact with
              MongoDB databases from within Node.js applications. Node.js and
              MongoDB are two different technologies used for two different
              purposes. Node.js is a server-side development platform whereas
              MongoDB is a database. So, the answer to this question can be
              split into two parts: 1. The difference between Node.js and
              MongoDB 2. Node.js with MongoDB. The first one is very simple. If
              you want to develop a web application that runs on a server, then
              using Node.js is a great choice. It's very fast, lightweight and
              easy to learn. On the other hand, if you want to store data, you
              should use MongoDB, which is a document-based database. It's fast
              and flexible and allows you to store, search and sort your data in
              many different ways.
            </p>
          </div>
          <div className="my-16">
            <p className="mt-10 mb-3 text-2xl font-semibold text-amber-800">
              🙋.Difference between javascript and nodejs?
            </p>

            <div className="my-14 hidden md:hidden lg:hidden xl:block overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full sm:row-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="  text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6  py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe"
                    >
                      Javascript
                    </th>
                    <th
                      scope="col"
                      className="px-6  py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe"
                    >
                      Nodejs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b dark:bg-gray-100 dark:border-gray-300">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      1.It is an open-source, cross-platform, interpreted,
                      lightweight scripting
                      <br />
                      programming language that is used to develop dynamic and
                      web applications
                      <br /> It is a programming language.
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      1.It is a cross-platform, open-source JavaScript runtime
                      environment
                      <br /> that allows JavaScript to be run on the server.
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      2.It works in any browser that has a proper browser
                      engine.
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      2.It's a JavaScript interpreter and environment with some
                      valuable libraries that JavaScript
                      <br /> programming can use separately.
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      3.It is generally used on the client-side server.
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      3.It is generally used on the server-side.
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      4.All the JavaScript is not important to the node
                      community.
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      4.All node projects represent the JavaScript community.
                    </td>
                  </tr>
                  <tr className="border-b dark:bg-gray-100 dark:border-gray-300">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      5.It can be run on any engine, including Spider Monkey,
                      V8, and JavaScript Core.
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      5.It is only supported by the V8 engine, which Google
                      Chrome mostly uses
                      <br /> and Any JavaScript program written with Node JS
                      will always be run in the V8 engine.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //mobile */}
            <div className=" grid sm:grid-cols-2 grid-col-1 gap-4 xl:hidden">
              <div className=" bg-white rounded-lg shadow-lg space-y-2 p-4">
                <div className=" bg-gray-100 shadow ">
                  <p className=" py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                    javascript
                  </p>
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  1.It is an open-source, cross-platform, interpreted,
                  lightweight scripting programming language that is used to
                  develop dynamic and web applications It is a programming
                  language.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  2.It works in any browser that has a proper browser engine.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">3.It is generally used on the client-side server.</div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  4.All the JavaScript is not important to the node community.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  5.It can be run on any engine, including Spider Monkey, V8,
                  and JavaScript Core.
                </div>
              </div>
              <div className=" bg-white rounded-lg shadow-lg space-y-2 p-4">
                <div className=" bg-gray-100 shadow ">
                  <p className=" py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                    Nodejs
                  </p>
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  1.It is a cross-platform, open-source JavaScript runtime
                  environment that allows JavaScript to be run on the server.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  2.It's a JavaScript interpreter and environment with some
                  valuable libraries that JavaScript programming can use
                  separately.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">3.It is generally used on the server-side.</div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  4.All node projects represent the JavaScript community.
                </div>
                <div className=" bg-amber-50 p-2 text-sm text-gray-700">
                  5.It is only supported by the V8 engine, which Google Chrome
                  mostly uses and Any JavaScript program written with Node JS
                  will always be run in the V8 engine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
