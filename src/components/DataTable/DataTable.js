import React from "react"
import { useNavigate } from "react-router-dom"

const DataTable = ({ product, handelDelete }) => {
  // const [products, setProducts] = useProduct();
  // console.log(products);
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <>
      <tbody>
        <tr>
          <td className="inline-flex  text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
            {product.name.length > 15
              ? product.name.slice(0, 15) + "..."
              : product.name}
          </td>
          <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-5 ">
            {product.price}
          </td>
          <td className="hidden xl:inline-flex  text-sm text-[#3E3F48] px-2 text-center md:text-left py-2 ">
           
            <span className=" text-[#3E3F48]text-sm">
              {product.description.length > 80
                ? product.description.slice(0, 80) + "..."
                : product.description}
            </span>
          </td>
          <td className=" font-bold bg-slate-200 rounded-full   text-sm text-[#3E3F48] px-2 text-center md:text-left py-3 ">
            <div className="flex  items-center space-x-2 mb-2 justify-center ">
              <p className="">
                {product.quantity}
              </p>
            </div>
          </td>
          <td className="hidden lg:inline-flex xl:inline-flex md:inline-flex text-sm   text-[#3E3F48] px-2 text-center md:text-left py-5 ">
            <p className="">{product.SupName}</p>
          </td>
          <td className=" text-sm text-[#3E3F48] px-2 text-center  py-5 ">
            <div className=" text-center">
            <img
              className="mx-auto object-fill rounded-full bg-cover  w-12 h-12 "
              src={product.img}
              alt=""
            />
            </div>
          </td>
         
          <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-2 ">
            
            <button
              onClick={() => handelDelete(product._id)}
              className="md:p-1 shadow-xl text-white    bg-gradient-to-l from-slate-500 via-orange-500 to-amber-600 hover:bg-gradient-to-r hover:from-slate-500 hover:via-orange-400 hover:to-amber-300 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
          <td className="text-sm text-[#3E3F48] px-2 text-center md:text-left py-2 ">
            {" "}
            <button
              onClick={() => navigateToProductDetail(product._id)}
              className="md:p-1 shadow-xl text-white    bg-gradient-to-l from-slate-500 via-orange-500 to-amber-600 hover:bg-gradient-to-r hover:from-slate-500 hover:via-orange-400 hover:to-amber-300 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DataTable;
