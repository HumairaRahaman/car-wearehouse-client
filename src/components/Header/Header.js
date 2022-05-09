import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import CustomLink from "../CustomLink/CustomLink"

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handelSignOut = () => {
    signOut(auth);
  };
  const handelSignIn = () => {
    navigate("/signin");
  };
  return (
    <div className="  sticky top-0 bg-white md:mb-0 lg:mb-0 xl:mb-0  px-4 py-4 md:px-12 lg:px-12 xl:px-12 md:py-6 lg:py-6 xl:py-6 flex justify-center shadow-lg">
      <div className=" flex gap-2 md:gap-4 lg:gap-4 xl:gap-4 text-xs md:text-xl lg:text-xl xl:text-xl">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/products">Products</CustomLink>

        {user && (
          <>
            <CustomLink to="/myItem">MyItem</CustomLink>

            <CustomLink to="/addItem">AddItem</CustomLink>
          </>
        )}
        {user ? (
          <button
            onClick={handelSignOut}
            className=" md:p-1 shadow-xl text-white    bg-gradient-to-l from-slate-500 via-orange-500 to-amber-600 hover:bg-gradient-to-r hover:from-slate-500 hover:via-orange-400 hover:to-amber-300 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={handelSignIn}
            className=" md:p-1 shadow-xl text-white    bg-gradient-to-l from-slate-500 via-orange-500 to-amber-600 hover:bg-gradient-to-r hover:from-slate-500 hover:via-orange-400 hover:to-amber-300 rounded"
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
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
