/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { uselo, useLocation, useMatch, useParams } from "react-router-dom";
import { fetch } from "../../../services/utils/controllers";
// import { Col, Row, Table, Button } from "react-bootstrap";
// import { amountToWords } from "../../../services/helpers/functions";
// import { FiPrinter } from "react-icons/fi";
// import ExportClaim from "./ExportClaim";
// import ClaimDetails from "../../widgets/ClaimDetails";
import ClaimDetails from "../../../components/commons/widgets/ClaimDetails";
import { amountToWords } from "../../../services/utils/helpers";

export const Claim = (props) => {
  const params = useLocation();

  const initialState = {
    claim: null,
    printed: false,
  };

  const [state, setState] = useState(initialState);
  // const auth = useSelector((state) => state.access.staff.authenticatedUser);

  const handleDownload = () => {
    setState({
      ...state,
      printed: false,
    });

    props.history.push("/claims");
  };

  // const getClaim = () => {
  //   fetch('/claims', id).then(res => console.log(res)).catch(err => console.lo)
  // }

  useEffect(() => {
    if (params.pathname && params.state) {
      const claim = params.state.claim;
      console.log(claim);

      setState({
        ...state,
        claim,
      });
    }
  }, []);

  return (
    <>
      {
        !state.printed ? (
          <>
            <h5>PURPOSE OF EXPENDITURE:</h5>
            <h4>
              <strong>
                {state.claim ? state.claim.title.toUpperCase() : null}
              </strong>
            </h4>

            <button
              className="btn btn-success mt-3"
              variant="success"
              // onClick={() =>
              //   setState({
              //     ...state,
              //     printed: true,
              //   })
              // }
            >
              {/* <FiPrinter style={{ marginRight: 13 }} /> */}
              PRINT CLAIM
            </button>

            <div className="card mt-5">
              <table className="table table-bordered table-striped hover">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>

                <tbody>
                  {state.claim && state.claim.instructions.length !== 0
                    ? state.claim.instructions.map((instruction) => (
                        <ClaimDetails
                          key={instruction.id}
                          instruction={instruction}
                        />
                      ))
                    : null}
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      <strong>TOTAL:</strong>
                    </td>
                    <td>
                      <strong>
                        {state.claim
                          ? new Intl.NumberFormat().format(
                              state.claim.total_amount
                            )
                          : null}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="row">
                <div className="col mt-4">
                  <p style={{ padding: 15, textDecoration: "underline" }}>
                    <strong>
                      Amount in Words:{" "}
                      {state.claim
                        ? amountToWords(state.claim.total_amount).toUpperCase()
                        : null}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null
        // <ExportClaim claim={state.claim} auth={auth} onClose={handleDownload} />
      }
    </>
  );
};

export default Claim;
