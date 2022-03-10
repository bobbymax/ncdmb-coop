import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo (2).png";
import ButtonField from "../../components/forms/ButtonField";
import TextInputField from "../../components/forms/TextInputField";
import { authenticate } from "../../features/auth/userSlice";
import { login } from "../../services/utils/auth/auth.controller";

const Login = () => {
  const [staffNo, setStaffNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      staff_no: staffNo,
      password,
    };

    try {
      setLoading(true);
      login(data)
        .then((res) => {
          setSucess(true);
          setLoading(false);
          setError(false);

          setTimeout(() => {
            dispatch(authenticate(res.data));

            setStaffNo("");
            setPassword("");

            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);

          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-body h-100">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <Link to="#" className="mb-12">
              <img alt="Logo" src={logo} className="h-100px" />
            </Link>

            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              {success ? (
                <div
                  className="alert alert-success text-center"
                  style={{ backgroundColor: "#17bf3e" }}
                >
                  <b style={{ color: "white" }}>Login successful!!</b>
                </div>
              ) : null}

              {error && (
                <div className="alert alert-danger text-center">
                  <b>Login failed!!</b>
                </div>
              )}

              <form className="form w-100" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">Sign In to Budget Portal</h1>
                </div>

                <div className="fv-row mb-10">
                  <TextInputField
                    additionalClasses="form-control-lg form-control-solid"
                    label="Staff Number"
                    placeholder="Enter Staff Number"
                    value={staffNo}
                    onChange={(e) => setStaffNo(e.target.value)}
                    required
                    disabled={loading ? true : false}
                  />
                </div>

                <div className="fv-row mb-10">
                  <TextInputField
                    additionalClasses="form-control-lg form-control-solid"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading ? true : false}
                  />
                </div>

                <ButtonField type="submit" disabled={loading ? true : false}>
                  {loading ? (
                    <i className="fa fa-circle-notch fa-2x fa-spin"></i>
                  ) : (
                    "Sign In"
                  )}
                </ButtonField>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
