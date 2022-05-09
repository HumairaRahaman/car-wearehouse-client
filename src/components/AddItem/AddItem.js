import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import auth from "../../firebase.init"

const AddItem = () => {
    const [user] = useAuthState(auth);
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data,e) =>{
      const url = `http://localhost:5000/products`;
      fetch(url,{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result);
          
      })
    console.log(data)
    e.target.reset();
  //toast
  toast.info("Add your product Successfully", { position: toast.POSITION.TOP_CENTER,autoClose: 4000 })
  };

  return (
    <div className=" min-h-screen bg-gradient-to-t from-yellow-100 via-gray-300 to-amber-200 flex justify-center items-center">
     

      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <div className="py-8 px-10 m-8 sm:m-0 sm:py-12 sm:px-12 bg-white  rounded-2xl shadow-xl ">
          <div>
            <h1 className="text-3xl text-center mb-6 text-transparent bg-clip-text font-bold bg-gradient-to-br from-amber-500 to-gray-500  cursor-pointe">
              Please add your Product information!
            </h1>
          </div>
          <div className="space-y-4">
            <input
            placeholder="Name"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
            readOnly
            placeholder="Email"
            value={user?.email}
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              {...register("email",{ required: true})}
            />
            <textarea
            placeholder="Description"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              {...register("description",{ required: true})}
            />
            <input
            placeholder="Price"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="text"
              {...register("price")}
            />
            <input
            placeholder="Quantity"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="number"
              {...register("quantity")}
            />
            <input
            placeholder="Supplier"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="text"
              {...register("SupName")}
            />
            <input
            placeholder="Photo URL"
              className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
              type="text"
              {...register("img")}
            />
            <div className="text-center mt-6">
            <input className="font-bold  py-4 px-14 text-gray-800 rounded-full  bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400 " type="submit" />
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
