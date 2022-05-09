import axios from "axios"
import { signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import ShowMyItem from "../ShowMyItem/ShowMyItem"

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //Delete

  const handelDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://still-beyond-86741.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          

          const remaining = myItems.filter((myItem) => myItem._id !== id);
         
          setMyItems(remaining);
        });
    }
  };

  useEffect(() => {
    const getItem = async () => {
      const email = user?.email;
      const url = `https://still-beyond-86741.herokuapp.com/products/myitem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/signin");
        }
      }
    };

    getItem();
  }, [user]);
  return (
    <>
      <div className="pb-8  h-auto w-full bg-gradient-to-t from-yellow-100 via-gray-200 to-amber-100">
        <h2 className="py-6 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center mb-4 cursor-pointe">
          My Item's
        </h2>
        <div className="grid mx-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 sm:gap-x-8  md:gap-x-12 xl:gap-x-4 gap-y-8 justify-items-center">
          {myItems.map((myItem) => (
            <ShowMyItem key={myItem._id} myItem={myItem} handelDelete={handelDelete} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link
            to="/products"
            className=" font-bold  py-4 px-14 text-gray-800 rounded-full rounded-tr-none   bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400 "
          >
            All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyItem;
