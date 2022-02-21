/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Select from "react-select/dist/declarations/src/Select";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import makeAnimated from "react-select/animated";

const ModifyUser = ({ user, roles }) => {
  const initialState = {
    id: 0,
    staff_no: "",
    grade_level_id: 0,
    department_id: 0,
    name: "",
    email: "",
    roles: [],
  };

  const formatRole = () => {
    return (
      roles &&
      roles.length > 0 &&
      roles.map((role) => ({
        value: role.id,
        label: role.name,
      }))
    );
  };

  useEffect(() => {
    if (user && user) {
      setState(user);
    }
  }, []);

  const [state, setState] = useState(initialState);
  const animated = makeAnimated();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-3">
                  <TextInputField
                    placeholder="Enter Staff Number"
                    value={state.staff_no}
                    onChange={(e) =>
                      setState({ ...state, staff_no: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <TextInputField
                    placeholder="Enter Fullname (Surname First)"
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3">
                  {/*  */}
                  <CustomSelect
                    defaultText="Select Grade Level"
                    options={formatLevels()}
                    value={state.grade_level_id}
                    onChange={(e) =>
                      setState({
                        ...state,
                        grade_level_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <TextInputField
                    placeholder="Enter Email Address"
                    value={state.email}
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  {/*  */}
                  <CustomSelect
                    defaultText="Select Department"
                    options={formatDept()}
                    value={state.department_id}
                    onChange={(e) =>
                      setState({
                        ...state,
                        department_id: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-12">
                  {/*  */}
                  <Select
                    closeMenuOnSelect={false}
                    components={animated}
                    options={formatRole()}
                    value={rolesInput}
                    onChange={setRolesInput}
                    isMulti
                  />
                </div>

                <div className="col-md-12 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      setState(initialState);
                      setOpen(false);
                      setRolesInput([]);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyUser;
