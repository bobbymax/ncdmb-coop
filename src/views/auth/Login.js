/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo-full.png";
import SubmitButton from "../../components/forms/SubmitButton";
import Form from "../../components/forms/Form";
import { authenticate } from "../../features/auth/userSlice";
import { login } from "../../services/utils/auth/auth.controller";
import FormInput from "../../components/forms/FormInput";

const Login = () => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    try {
      login(data)
        .then((res) => {
          dispatch(authenticate(res.data));
          resetForm();
          naviagate("/");
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a href="index.html">
                          <img src={logo} alt="logo brand" />
                        </a>
                      </div>

                      <Form
                        initialValues={{ staff_no: "", password: "" }}
                        onSubmit={handleSubmit}
                        // validationSchema={validationSchema}
                      >
                        <FormInput
                          label="Staff Number"
                          placeholder="Enter Staff Number"
                          name="staff_no"
                          // required={true}
                          type="text"
                        />

                        <FormInput
                          label="Password"
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          // required
                        />

                        <div>
                          <SubmitButton title="Sign Me In" />
                        </div>
                      </Form>

                      <>
                        {/* <form onSubmit={handleSubmit}>
                          <TextInputField
                            label="Staff Number"
                            placeholder="Enter Staff Number"
                            value={staffNo}
                            onChange={(e) => setStaffNo(e.target.value)}
                            required
                          />

                          <TextInputField
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />

                          <ButtonField text="Sign Me In" type="submit" />
                        </form> */}
                      </>
                    </div>
                  </div>
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
