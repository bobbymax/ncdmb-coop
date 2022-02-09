/* eslint-disable no-unused-vars */
import React from "react";
// import { Link } from "react-router-dom";
import TableLoader from "../../commons/tables/TableLoader";

const ClaimTable = ({ claims, onEdit, onDestroy, onView, addDetails }) => {
  return (
    <>
      {claims && (
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
                <thead>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {claims.map((claim) => (
                    <tr key={claim.id}>
                      <td>{claim.title}</td>
                      <td>{`NGN ${new Intl.NumberFormat().format(
                        claim.total_amount
                      )}`}</td>
                      <td>
                        {claim.status === "registered" ||
                        claim.status === "cleared" ||
                        claim.status === "batched" ? (
                          <button
                            className="btn-sm btn btn-primary"
                            onClick={() => onView(claim)}
                          >
                            VIEW CLAIM
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => addDetails(claim)}
                              disabled={
                                claim.status === "registered" ||
                                claim.status === "unregistered"
                              }
                            >
                              ADD DETAILS
                            </button>

                            <button
                              onClick={() => onEdit(claim)}
                              className="btn btn-warning btn-sm"
                              disabled={
                                claim.status === "registered" ||
                                claim.status === "unregistered"
                              }
                            >
                              Edit
                              {/* <FiEdit /> */}
                            </button>

                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => onDestroy(claim)}
                              disabled={
                                claim.status === "registered" ||
                                claim.status === "unregistered"
                              }
                            >
                              Delete
                              {/* <FiTrash2 /> */}
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}

                  {claims.length <= 0 && (
                    <tr>
                      <td colSpan="3" className="text-danger">
                        {"No Data Found!!"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimTable;
