import React, { useState } from "react";
import "./Login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import useAuth from "../../../hooks/useAuth";

const auth = getAuth();

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const { signInUsingGoogle } = useAuth();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="container">
      <div className="m-5 py-5  login-system">
        <div className="mb-3 shadow-lg p-3">
          <form onSubmit={handleRegistration}>
            <h2 className="text-success">
              Please {isLogin ? "Login" : "Register"} with Your Email-Id
            </h2>

            {!isLogin && (
              <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label ">
                  Name:
                </label>
                <div className="col-sm-10 m-1">
                  <input
                    type="text"
                    onBlur={handleNameChange}
                    className="form-control"
                    id="inputName"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}

            <div className="row mb-3 ">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10 m-1">
                <input
                  placeholder="Your Email"
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password:
              </label>
              <div className="col-sm-10 m-1">
                <input
                  placeholder="Your Password"
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered?
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>

        <div className="my-5 shadow-lg p-3">
          <h2 className="text-success">Please Signin with google </h2>
          <button
            onClick={signInUsingGoogle}
            className="btn btn-warning text-black"
          >
            Google sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
