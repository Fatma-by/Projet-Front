import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const push = useNavigate();

  const handleClick = () => {
    push("/");
  };

  const HandleLougout = async () => {
    try {
      const response = await axios
        .post(`/api/user/logout`)
        .then(async (response) => {
          toast.success(response.data.message);

          setTimeout(handleClick(response.data), 5000);
        });

      // Check if the response indicates a successful logout
      if (response.status === 200) {
        console.log("Logout successful");
        // Perform any additional actions after successful logout if needed
      } else {
        console.log("Logout failed");
        // Handle the error or provide appropriate feedback to the user
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
      // Handle the error or provide appropriate feedback to the user
    }
  };

  return (
    <>
      <button onClick={HandleLougout}> Logout </button>
    </>
  );
}

export default Logout;
