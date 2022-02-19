import React, { useEffect, useState } from "react";
import TextInputField from "../../../components/forms/TextInputField";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";
// import TextInputField from '../../'

const AssignRole = () => {
  const initialState = {
    user_id: 0,
    roles: [],
  };

  const { data: staffs, request } = useApi(collection);
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    request("users");
  }, []);

  const addRole = (staff) => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2>Assign Role</h2>
        </div>
      </div>

      {open && (
        <div className="col-md-12">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      )}

      <div className="col-md-12">
        <div className="card">
          <div className="card-body table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Staff No</td>
                  <td>Level</td>
                  <td>Manage</td>
                </tr>
              </thead>

              <tbody>
                {staffs.length && staffs.length > 0 ? (
                  staffs.map((staff) => (
                    <tr key={staff.id}>
                      <td>{staff.name}</td>
                      <td>{staff.staff_no}</td>
                      <td>{staff.level}</td>
                      <td>
                        <i
                          className="fa fa-edit"
                          onClick={() => addRole(staff)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignRole;
