import React, { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";
// import TextInputField from '../../'

const AssignRole = () => {
  const { data: staffs, request } = useApi(collection);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    request("users");
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2>Assign Role</h2>
        </div>
      </div>

      {open && <h2>Open</h2>}

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
                        <i className="fa fa-edit"></i>
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
