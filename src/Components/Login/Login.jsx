import "./Login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useCallback, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from '../AuthStore/AuthStore';



function Login() {

 
    const push = useNavigate();
  
    const handleClick = useCallback((p) => {
      const {data} = p;

      if (data.role.includes("Enseignant")) {
        push("/Enseignant");
      } else if (data.role.includes("Eleve")) {
        push("/Eleve");
      }
      
     
     
    }, []);
    const {
      email,
      password,
      emailError,
      passwordError,
      isDisabled,
      refmail,
      refpassword,
      verifyAndSetEmail,
      verifyAndSetPassword,
      updateIsDisabled,
    } = useAuthStore();
    useEffect(() => {
      updateIsDisabled();
    }, [emailError, passwordError, updateIsDisabled]);
  

  const handleSubmit = async (values) => {
    console.log(email, password);
    const res = await axios
      .post(`/api/user/login`, {
        email: email,
        password: password,
      })
      .then(async (response) => {
        console.log(response);
        toast.success(response.data.message);

        setTimeout(handleClick(response.data), 5000);
      })

      .catch(function (error) {
        //axios handel error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };
  return (
    <div className="Login">
      <div className="loginContainer">
        <h1>Bienvenu!</h1>

        <div className="input-container">
          <label>Identifiant </label>
          <input
            type="text"
            name="uname"
            required
            // ref={refmail}
            onChange={(e) => {
              verifyAndSetEmail(e.target.value);
              console.log(e.target.value);
            }}
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input
            type="password"
            name="pass"
            required
            ref={refpassword}
            onChange={(e) => {
              verifyAndSetPassword(e.target.value);
              console.log(e.target.value);
            }}
          />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <a className="link" href="#">
          Mot de passe oublié?
        </a>
        <a className="link" href="#">
          Créer un nouveau mot de passe
        </a>

        <button className="loginBut" onClick={handleSubmit}>
          <p>Se connecter</p>
        </button>

        <button className="siG">
          <img
            className="Img"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Utiliser Google</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
