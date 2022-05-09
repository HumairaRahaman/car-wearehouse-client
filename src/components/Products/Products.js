import React from "react"
import { Link } from "react-router-dom"
import useProduct from "../../hooks/useProduct"
import DataTable from "../DataTable/DataTable"

const Products = () => {
  const [products, setProducts] = useProduct();

  const handelDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://still-beyond-86741.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remaining = products.filter((product) => product._id !== id);
          console.log(remaining);
          setProducts(remaining);
        });
    }
  };

  return (
     <div className="p-5 border-2 border-b-0">
    <table className="table-auto w-full">
      {/* <thead className="border-b-2 ">
        <tr className="">
          <td className=" text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                Name
              </p>
            </div>
          </td>
          <td className="text-sm   text-[#3E3F48] px-2 py-3 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
                Price
              </p>
            </div>
          </td>
          <td className="hidden   text-sm text-[#3E3F48] px-2 py-5 text-center ">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br  from-amber-500 to-gray-500 text-center cursor-pointe">
              Description
            </p>
          </td>
          <td className="hidden lg:inline-flex text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              Quantity
            </p>
          </td>
          <td className="text-sm text-[#3E3F48] px-2 py-5 hidden lg:inline-flex md:inline-flex xl:inline-flex ">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
              Supplier
            </span>
          </td>
    
        </tr>
      </thead> */}

<thead className="border-b-2">
        <tr className="">
        <td className="text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p className=" font-bold">Name</p>
              <img src="/6.svg" alt="" />
            </div>
          </td>
          <td className="hidden lg:inline-flex text-sm text-[#3E3F48] px-2 py-5 text-center md:text-left">
            <div className="inline-flex items-center justify-start space-x-1">
              <p className=" font-bold">Price</p>
              <img src="/5.svg" alt="" />
            </div>
          </td>
          
          
          
          
          
          
        </tr>
      </thead>
      {products.map((product) => (
        <DataTable
          key={product._id}
          product={product}
          handelDelete={handelDelete}
        />
      ))}
    </table>
    <div className="flex items-center justify-center mt-8">
      <Link
        to="/addItem"
        className=" font-bold  py-4 px-14 text-gray-800 rounded-full rounded-tr-none bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400"
      >
        Add Item
      </Link>
    </div>
  </div>
  
  );
};

export default Products;
