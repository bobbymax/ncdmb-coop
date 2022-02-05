import React, { useEffect, useState } from "react";
import BasicTable from "../../../components/commons/tables/BasicTable";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import ClaimTable from "../../../components/commons/widgets/ClaimTable";
import { connect } from "react-redux";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import SubmitButton from "../../../components/forms/SubmitButton";
import useApi from "../../../services/hooks/useApi";
import {
  collection,
  store,
  destroy,
  alter,
  fetch,
} from "../../../services/utils/controllers";

const Claims = (props) => {
  const initialState = {
    id: 0,
    title: "",
    type: "staff-claim",
    submitted: false,
    formDisplay: false,
    isUpdating: false,
  };

  const { request, data: claims } = useApi(collection);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);

  const columns = [
    { label: "Title", key: "title" },
    { label: "Amount", key: "total_amount" },
  ];

  const handleSubmit = (values) => {
    const data = { ...values, title: values.title, type: state.type };

    // console.log(data);

    store("claims", data)
      .then((res) => console.log("Succcess", res))
      .catch((err) => console.log(err));

    // console.log(values);

    // const formErrors = validate(rules, data);
    // setErrors(formErrors);
    // const status =
    //   Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

    // if (status) {
    //   if (update) {
    //     try {
    //       alter("roles", state.id, data)
    //         .then((res) => {
    //           const result = res.data.data;

    //           setRoles(
    //             roles.map((el) => {
    //               if (result.id === el.id) {
    //                 return result;
    //               }

    //               return el;
    //             })
    //           );
    //           Alert.success("Updated", res.data.message);
    //         })
    //         .catch((err) => console.log(err.message));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     try {
    //       store("roles", data)
    //         .then((res) => {
    //           const result = res.data.data;
    //           setRoles([result, ...roles]);
    //           Alert.success("Created!!", res.data.message);
    //         })
    //         .catch((err) => console.log(err.message));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //   setErrors({});

    //   setUpdate(false);
    //   setState(initialState);
    //   setOpen(false);
    // }
  };

  const handlePrintOut = (claim) => {
    props.history.navigate({
      pathname: `/claims/${claim.reference_no}/print`,
      state: {
        claim: claim,
        actionType: "print",
      },
    });
  };

  const loadClaim = (data) => {
    setState({
      ...state,
      id: data.id,
      title: data.title,
      type: data.type,
      formDisplay: true,
      isUpdating: true,
    });

    setOpen(true);
  };

  // const handleAddDetails = (claim) => {
  //   props.history.push({
  //     pathname: `/claims/${claim.reference_no}/add/details`,
  //     state: {
  //       claim: claim,
  //       actionType: "update",
  //     },
  //   });
  // };

  // console.log(claims);

  // const handleUpdate = data => {
  //     //
  // }

  // const handleDestroy = data => {

  // }

  // const handleSearch = (str) => {
  //   setSearchTerm(str);

  //   if (str !== "") {
  //     const filtered = claims.filter((row) => {
  //       return Object.values(row)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(str.toLowerCase());
  //     });

  //     setResults(filtered);
  //   } else {
  //     setResults(claims);
  //   }
  // };

  useEffect(() => {
    request("claims");
    console.log(props);
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button
            className="btn btn-success"
            disabled={open}
            onClick={() => setOpen(true)}
          >
            <i className="fa fa-plus-square"></i> Add Claim
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="form-body">
                  <>
                    <Form
                      initialValues={{
                        title: state.title,
                        type: state.type,
                      }}
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <FormInput
                            placeholder="Enter Claim Title"
                            name="title"
                          />
                        </div>

                        <div className="mt-3 ml-3 d-flex">
                          <SubmitButton
                            className="btn btn-primary"
                            title="Submit"
                            // disabled={open}
                          />

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              // setUpdate(false);
                              // setState(initialState);
                              setOpen(false);
                              // setErrors({});
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </Form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="col-lg-12">
        <ClaimTable
          claims={claims}
          onView={handlePrintOut}
          onEdit={loadClaim}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.access.staff.authenticatedUser,
  claims: state.claims,
});

const mapDispatchToProps = (dispatch) => {
  return {
    index: (entity, broadcast) => dispatch(fetch(entity, broadcast)),
    store: (entity, body, broadcast) =>
      dispatch(store(entity, body, broadcast)),
    update: (entity, id, body, broadcast) =>
      dispatch(alter(entity, id, body, broadcast)),
    destroy: (entity, id, broadcast) =>
      dispatch(destroy(entity, id, broadcast)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Claims);
