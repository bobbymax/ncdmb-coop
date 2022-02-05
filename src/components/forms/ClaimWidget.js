import React from "react";
// import { Button as button } from "react-bootstrap";
// import { FiEdit, FiTrash2 } from "react-icons/fi";

const ClaimWidget = ({ claim, onEdit, onDestroy, onView, addDetails }) => {
  return (
    <tr>
      <td>{claim.title}</td>
      <td>{`NGN ${new Intl.NumberFormat().format(claim.total_amount)}`}</td>
      <td>
        {claim.status === "registered" ||
        claim.status === "cleared" ||
        claim.status === "batched" ? (
          <button
            variant="success"
            className="btn-sm"
            onClick={() => onView(claim)}
          >
            VIEW CLAIM
          </button>
        ) : (
          <>
            <button
              className="btn-sm"
              onClick={() => addDetails(claim)}
              disabled={
                claim.status === "registered" || claim.status === "unregistered"
              }
            >
              ADD DETAILS
            </button>

            <button
              onClick={() => onEdit(claim)}
              className="btn btn-warning btn-sm"
              disabled={
                claim.status === "registered" || claim.status === "unregistered"
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
                claim.status === "registered" || claim.status === "unregistered"
              }
            >
              Delete
              {/* <FiTrash2 /> */}
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ClaimWidget;
