import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadSpinner from "../../components/Spinner";
import { login } from "../../store/actions/authActions";
import logo from "../../assets/images/Plain-logo.webp";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };

    dispatch(login(user, history))
      .then((res) => {
        setSuccess(true);
        window.location.reload();
        console.log("Login Response Data ====>", res);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  };

  return (
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card overflow-hidden">
              <div class="bg-primary bg-soft">
                <div class="row">
                  <div class="col-7">
                    <div class="text-primary">
                      <h5 class="text-primary">Welcome Back !</h5>
                      <p>Distributor Management System</p>
                    </div>
                  </div>
                </div>
              </div>
              {success && (
                <div className="alert alert-success" role="alert">
                  Successfully Logged in
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  Login Failed
                </div>
              )}
              <div class="card-body pt-0">
                <div class="auth-logo">
                  <a href="index.html" class="auth-logo-light">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src={logo}
                          alt="Logo"
                          class="rounded-circle"
                          height="50"
                        />
                      </span>
                    </div>
                  </a>

                  <a href="index.html" class="auth-logo-dark">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src={logo}
                          alt="Logo"
                          class="rounded-circle"
                          height="50"
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div class="p-2">
                  <form class="form-horizontal" onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="username" class="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <div class="input-group auth-pass-inputgroup">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="remember-check"
                      />
                      <label class="form-check-label" for="remember-check">
                        Remember me
                      </label>
                    </div>

                    <div class="mt-3 d-grid">
                      <button
                        class="btn btn-primary waves-effect waves-light"
                        type="submit"
                      >
                        {loading ? <LoadSpinner /> : "Log In"}
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <a href="auth-recoverpw.html" class="text-muted">
                        <i class="mdi mdi-lock me-1"></i> Forgot your password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
