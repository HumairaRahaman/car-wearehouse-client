import React from "react"
import {
  useAuthState,
  useSendEmailVerification
} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.init"
import Spinner from "../Spinner/Spinner"

const REquireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate> 
      
    );
      
    
  }

  // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
  //   return (
  //     <div>
  //       <h3 className=" text-red-600">Not verified</h3>
  //       <h5 className=" text-green-700">Plz verify</h5>
  //       <button
  //         onClick={async () => {
  //           await sendEmailVerification();
  //           alert("Sent email");
  //         }}
  //       >
  //         Verify email
  //       </button>
  //     </div>
  //   );
  // }

  return children;
};

export default REquireAuth;
