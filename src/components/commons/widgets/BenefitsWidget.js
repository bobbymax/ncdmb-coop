import React from "react";
// import { FiTrash2, FiEdit, FiWind } from "react-icons/fi";
// import { Button } from "react-bootstrap";

const BenefitsWidget = ({ benefit, onEdit, onDestroy, modalControl }) => {
  return (
    <tr>
      <td>{benefit.name}</td>
      <td>{benefit.parent}</td>

      <td>
        <button
          className="btn btn-success btn-sm"
          onClick={() => modalControl(benefit)}
          disabled={!benefit.canAddEntitlement}
        >
          {/* <FiWind style={{ marginRight: 8 }} /> */}
          Add Entitlement
        </button>
        <button
          onClick={() => onEdit(benefit)}
          className="btn btn-warning btn-sm"
        >
          Edit
          {/* <FiEdit /> */}
        </button>

        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => onDestroy(benefit)}
        >
          Delete
          {/* <FiTrash2 /> */}
        </button>
      </td>
    </tr>
  );
};

export default BenefitsWidget;
