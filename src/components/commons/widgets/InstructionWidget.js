import React from "react";

const InstructionWidget = ({ instruction, onDestroy }) => {
  return (
    <tr>
      <td>{instruction.from}</td>
      <td>{instruction.to}</td>
      <td>{instruction.benefit}</td>
      <td>{instruction.amount}</td>

      <td>
        <button
          className="btn btn-danger btn-sm"
          // onClick={() => onDestroy(instruction)}
        >
          FIX
          {/* <FiX /> */}
        </button>
      </td>
    </tr>
  );
};

export default InstructionWidget;
