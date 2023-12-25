import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../AuthStore/AuthStore";

function Logout() {
  const [init] = useAuthStore((state) => [state.init]);
  console.log(init);

  const push = useNavigate();

  const handleClick = () => {
    push("/");
  };



  return (
    <>
      <button onClick={HandleLougout}> Logout </button>
    </>
  );
}

export default Logout;
