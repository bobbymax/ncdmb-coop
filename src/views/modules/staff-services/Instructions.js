/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InstructionWidget from "../../../components/commons/widgets/InstructionWidget";
import TextInputField from "../../../components/forms/TextInputField";
import { alter, collection, store } from "../../../services/utils/controllers";
import AddInstruction from "./AddInstruction";

export const Instructions = (props) => {
  const params = useLocation();
  const auth = useSelector((state) => state.auth.value.user);

  const initialState = {
    claim: null,
    claim_id: 0,
    title: "",
  };

  const [state, setState] = useState(initialState);
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [benefits, setBenefits] = useState([]);
  const [benefit, setBenefit] = useState({});

  const handleSubmit = (url, data) => {
    store(url, data)
      .then((res) => alert("Success", res.data.message))
      .catch((err) => alert("failed"));
  };

  const fetchBen = (value) => {
    collection("benefits/" + value)
      .then((res) => setBenefit(res.data.data))
      .catch((err) => console.log(err));
  };

  const fetchChild = async (value) => {
    const benefits = await collection("benefits/" + value);
    const data = benefits.data.data;

    return data;
  };

  // // const handleInstructionDestroy = (instruction) => {
  // //   props.destroy(
  // //     `claims/${instruction.parent.id}/instructions`,
  // //     instruction.id,
  // //     {
  // //       success: broad.DELETED_CLAIM_INSTRUCTION_RECORD,
  // //       failed: broad.DELETED_CLAIM_INSTRUCTION_RECORD_FAILED,
  // //     }
  // //   );
  // // };

  const updateGrandTotal = (sum) => {
    return setTotal(sum);
  };

  const registerClaim = () => {
    const data = {
      title: state.claim.title,
      total_amount: total,
      status: "registered",
    };

    alter("claims", state.claim_id, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // props.update("claims", state.claim.id, data, {
    //   success: broad.REGISTERED_CLAIM_SUCCESSFULLY,
    //   failed: broad.REGISTERED_CLAIM_FAILED,
    // });
  };
  //   setState({
  //     ...state,
  //     claim: null,
  //     claim_id: 0,
  //     title: "",
  //   });
  //   setTotal(0);

  // //   props.history.push("/claims");
  // // };

  // useEffect(() => {
  //   props.index("benefits", {
  //     success: broadcast.FETCH_BENEFITS,
  //     failed: broadcast.FETCH_BENEFITS_FAILED,
  //   });
  // }, []);

  console.log("Claim", params.state.claim);

  useEffect(() => {
    if (params.path && params.state) {
      const claim = params.state.claim;

      setState({
        ...state,
        claim: claim,
        claim_id: claim.id,
        title: claim.title,
      });

      // props.index(`claims/${claim.id}/instructions`, {
      //   success: broad.FETCHED_CLAIM_INSTRUCTIONS,
      //   failed: broad.FETCHED_CLAIM_INSTRUCTIONS_FAILED,
      // });
      // setStatus(status)
    }

    if (params.state.claim.instructions.length !== 0) {
      const sum = params.state.claim.instructions.reduce(
        (sum, instruction) => sum + parseFloat(instruction.amount),
        0
      );
      updateGrandTotal(sum);
    }
  }, [params.state.claim.instructions]);

  const getBenefits = () => {
    collection("benefits")
      .then((res) => setBenefits(res.data.data))
      .catch((err) => console.log(err));

    // return benefits.data.data;
  };

  useEffect(() => {
    if (params.pathname && params.state) {
      const claim = params.state.claim;
      const status = params.state.actionType;

      setState({
        ...state,
        claim: claim,
        claim_id: claim.id,
        title: claim.title,
      });
    }

    getBenefits();
  }, []);

  return (
    <>
      <div className="form-group">
        <label className="form-label">CLAIM TITLE</label>
        <TextInputField
          className="form-control"
          type="text"
          disabled={state.claim}
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
        />
      </div>

      <AddInstruction
        show={modal}
        claim={state.claim}
        onSubmit={handleSubmit}
        benefits={benefits}
        benefit={benefit}
        fetcher={fetchBen}
        children={fetchChild}
        onHide={() => {
          setModal(false);
        }}
      />

      <div className="">
        <div className="row mb-3">
          <div className="col">
            <button className="btn btn-success" onClick={() => setModal(true)}>
              <i className="fa fa-plus" style={{ marginRight: "2px" }}></i>
              ADD DETAILS
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {params.state.claim.instructions.collection &&
                params.state.claim.instructions.collection.length !== 0
                  ? params.state.claim.instructions.collection.map(
                      (instruction) => {
                        if (state.claim) {
                          return (
                            <InstructionWidget
                              key={instruction.id}
                              instruction={instruction}
                              // onDestroy={handleInstructionDestroy}
                            />
                          );
                        } else {
                          return null;
                        }
                      }
                    )
                  : null}
              </tbody>
            </table>
            <h4 className="mb-4 pull-right">
              TOTAL: <span style={{ marginLeft: 25 }}>NGN {total}</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="">
        <button
          className="btn btn-success btn-lg"
          type="button"
          onClick={registerClaim}
        >
          <i className="fa fa-paper-plane" style={{ marginRight: "2px" }}></i>
          Submit
        </button>
      </div>
    </>
  );
};

export default Instructions;
