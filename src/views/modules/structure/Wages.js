/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
// import BasicTable from "../../../components/commons/tables/BasicTable";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import SubmitButton from "../../../components/forms/SubmitButton";
import Alert from "../../../services/classes/Alert";
import * as Yup from "yup";
import {
  collection,
  alter,
  store,
  destroy,
} from "../../../services/utils/controllers";
// import { validate } from "../../../services/utils/validation";
import useApi from "../../../services/hooks/useApi";
import FormSelect from "../../../components/forms/FormSelect";

const validationSchema = Yup.object().shape({
  benefit_id: Yup.string().required().label("Benefit ID"),
  amount: Yup.string().required().max(25).label("Amount"),
});

const Wages = () => {
  const initialState = {
    id: 0,
    benefit_id: 0,
    amount: parseInt(state.amount),
    showForm: false,
    isUpdating: false,
    dependencies: [],
  };

  const [state, setState] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  // const [errors, setErrors] = useState({});
  // const [roles, setRoles] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const {
    request,
    data: wages,
    setData: setWages,
    loading,
  } = useApi(collection);

  useEffect(() => {
    request("priceLists");
    getBenefits();
  }, []);

  // const [status, setStatus] = useState(false)

  const columns = [
    {
      label: "Benefit",
      key: "benefit_name",
    },
    {
      label: "Amount",
      key: "amount",
    },
  ];

  const handleUpdate = (data) => {
    setState(data);
    setUpdate(true);
    setOpen(true);
  };

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = wages.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(wages);
    }
  };

  const getBenefits = async () => {
    collection("benefits")
      .then((res) => setBenefits(res.data.data))
      .catch((err) => console.log("Error", err));
  };

  const handleSubmit = (values, { resetForm }) => {
    // store("subBudgetHeads", values)
    //   .then((res) => console.log("Succcess", res))
    //   .catch((err) => console.log(err));
    // values.logisticsBudget ?

    console.log(values);

    if (update) {
      try {
        alter("priceLists", state.id, values)
          .then((res) => {
            // console.log(res);
            const result = res.data.data;
            console.log(result);
            setWages.map((el) => {
              if (result.id === el.id) {
                return result;
              }
              return el;
            });
            Alert.success("Updated", res.data.message);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        store("priceLists", values)
          .then((res) => {
            const result = res.data.data;
            setWages([result, ...wages]);
            Alert.success("Created!!", res.data.message);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        console.log(error);
      }
    }

    setUpdate(false);
    resetForm();
    setState(initialState);
    // setOpen(false);
    // }
  };
  const handleDestroy = (data) => {
    Alert.flash(
      "Are you sure?",
      "warning",
      "You would not be able to revert this!!"
    ).then((result) => {
      if (result.isConfirmed) {
        destroy("roles", data.label)
          .then((res) => {
            setWages([...wages.filter((role) => role.id !== res.data.data.id)]);
            Alert.success("Deleted!!", res.data.message);
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button
            className="btn btn-primary"
            onClick={() => setOpen(!open)}
            disabled={open}
          >
            <i className="fa fa-plus-square"></i>{" "}
            {state.isUpdating ? "Update" : "Add"} Price Lists
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
                      onSubmit={handleSubmit}
                      validationSchema={validationSchema}
                      initialValues={{
                        benefit_id: state.benefit_id,
                        amount: state.amount,
                      }}
                      // enableReinitialize={true}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <FormSelect
                            defaultText="Enter Role Name"
                            options={benefits}
                            name="benefit_id"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            placeholder="Amount"
                            type="number"
                            name="amount"
                          />
                        </div>

                        <div className="col-md-12 mt-3 d-flex">
                          <SubmitButton
                            title="Submit"
                            // onClick={() => setOpen(false)}
                          />
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              setUpdate(false);
                              setState(initialState);
                              setOpen(false);
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>

                      {/* <SubmitButton /> */}
                    </Form>
                  </>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="col-lg-12">
        <DataTableComponent
          pageName="Price Listing"
          columns={columns}
          term={searchTerm}
          rows={searchTerm.length < 1 ? wages : results}
          handleEdit={handleUpdate}
          isFetching={loading}
          searchKeyWord={handleSearch}
          handleDelete={handleDestroy}
        />
      </div>
    </div>
  );
};

export default Wages;
