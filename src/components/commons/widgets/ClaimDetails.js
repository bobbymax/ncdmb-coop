import React from "react";
// import { formatDate } from "../../../services/utils/helpers";
import { formatDate } from "../../../services/utils/helpers";
// import { formatDate } from "../../../services/utils/helpers";

const ClaimDetails = ({ instruction }) => {
  return (
    <tr>
      <td>{`${formatDate(instruction.from).toUpperCase()}  -  ${formatDate(
        instruction.to
      ).toUpperCase()}`}</td>
      <td>{instruction.description}</td>
      <td>{new Intl.NumberFormat().format(instruction.amount)}</td>
    </tr>
  );
};

export default ClaimDetails;
