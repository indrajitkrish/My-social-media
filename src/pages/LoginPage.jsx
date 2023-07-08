import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export function LoginPage() {
  const [myEmail, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [myPassword, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [showLogin, setShowLogin] = useState(true);
  const { handleSubmit, handleSignUp, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  const Submit = () => {
    handleSubmit(myEmail, myPassword.password);
  };
  const handleLogin = (getValue) => {
    setShowLogin(getValue);
  };
  const signUpSubmit = () => {
    if (myPassword.password !== confirmPass) {
      let conpass = document.getElementById("confirmPass");
      conpass.setCustomValidity("Not matched.");
    }
    handleSignUp(myEmail, myPassword, firstName, lastName);
  };
  const loginGuest = () =>
  {
    handleSubmit("adarshbalika", "adarshBalika123")
  }

  return (
    <>
    <div class="login-container">
      <div class="login-headers">
      <h3>Motivator</h3>
      <p>Share your inspring stories</p>
      </div>
      {!isLoggedIn ? (
        <div class="profile-div">
          <div class="LandS-div">
            <button
              style={{ backgroundColor: showLogin && "#E21818" }}
              onClick={() => handleLogin(true)}
              class="toggle-button"
            >
              Login
            </button>
            <button
              style={{ backgroundColor: !showLogin && "#E21818" }}
              onClick={() => handleLogin(false)}
              class="toggle-button"
            >
              Sign Up
            </button>
          </div>
          {showLogin ? (
            <div class="login">
                <label>Email</label>
                <br/>
              <input
                type="text"
                placeholder="Enter Username"
                value={myEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br/>
              <br/>
                <label>Password</label>
                <br/>
              <input
                type={myPassword.showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={myPassword.password}
                onChange={(e) =>
                  setPassword({ ...myPassword, password: e.target.value })
                }
              />
              <i
                onClick={() =>
                  setPassword({
                    ...myPassword,
                    showPassword: !myPassword.showPassword,
                  })
                }
                class={
                  myPassword.showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                }
                id="togglePassword"
              ></i>
              <br />
              <br />
              <button class="btn-login" onClick={() => Submit()}>
                Login
              </button>
              <button class="btn-login" onClick={()=>loginGuest()}>Guest Mode</button>
            </div>
          ) : (
            <div class="login">
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter username"
                value={myEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>First Name</p>
              <input
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p>Last Name</p>
              <input
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
              <p>Password</p>
              <input
                type={myPassword.showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={myPassword.password}
                onChange={(e) =>
                  setPassword({ ...myPassword, password: e.target.value })
                }
              />
              <i
                onClick={() =>
                  setPassword({
                    ...myPassword,
                    showPassword: !myPassword.showPassword,
                  })
                }
                class={
                  myPassword.showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                }
                id="togglePassword"
              ></i>
              <p>Confirm Password</p>
              <input
                type={myPassword.showPassword ? "text" : "password"}
                placeholder="Enter password"
                id="confirmPass"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <i
                onClick={() =>
                  setPassword({
                    ...myPassword,
                    showPassword: !myPassword.showPassword,
                  })
                }
                class={
                  myPassword.showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                }
                id="togglePassword"
              ></i>
              <br />
              <br />
              <button class="btn-login" onClick={() => signUpSubmit()}>
                SignUp
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>You are logged in!</h3>
          <button class="btn-login" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
      </div>
    </>
  );
}
