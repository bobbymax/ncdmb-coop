/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BasicTable from "../../../components/commons/tables/BasicTable";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import SubmitButton from "../../../components/forms/SubmitButton";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import Alert from "../../../services/classes/Alert";
import * as Yup from "yup";
import {
  collection,
  alter,
  store,
  destroy,
} from "../../../services/utils/controllers";
import { validate } from "../../../services/utils/validation";
import useApi from "../../../services/hooks/useApi";
import FormSelect from "../../../components/forms/FormSelect";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  label: Yup.string().required().label("Label"),
  parentId: Yup.number().label("Parent"),
  depends: Yup.number().required().label("Depends"),
  description: Yup.string().required().label("Description"),
});

const Benefits = () => {
  const initialState = {
    showForm: false,
    id: 0,
    name: "",
    label: "",
    parentId: 0,
    depends: 0,
    description: "",
    isUpdating: false,
  };

  const [state, setState] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [roles, setRoles] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const { request, data: wages } = useApi(collection);

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

  const getBenefits = async () => {
    collection("benefits")
      .then((res) => setBenefits(res.data.data))
      .catch((err) => console.log("Error", err));
  };

  const handleSubmit = (data, { resetForm }) => {
    console.log(data);
    return;

    if (update) {
      try {
        alter("priceLists", state.id, data)
          .then((res) => {
            const result = res.data.data;

            setRoles(
              wages.map((el) => {
                if (result.id === el.id) {
                  return result;
                }

                return el;
              })
            );
            Alert.success("Updated", res.data.message);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        store("priceLists", data)
          .then((res) => {
            const result = res.data.data;
            setRoles([result, ...wages]);
            Alert.success("Created!!", res.data.message);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }

    setUpdate(false);
    setState(initialState);
    // setOpen(false)

    resetForm();
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
            setRoles([...wages.filter((role) => role.id !== res.data.data.id)]);
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
            {state.isUpdating ? "Update" : "Add"} Benefit
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
                        showForm: false,
                        id: 0,
                        name: "",
                        label: "",
                        parentId: 0,
                        depends: 0,
                        description: "",
                        isUpdating: false,
                      }}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <FormInput
                            label="Benefit Title"
                            name="name"
                            placeholder="Enter Benefit"
                            // type="number"
                          />
                        </div>

                        <div className="col-md-4">
                          <FormSelect
                            label="Select Parent"
                            defaultText="None"
                            defaultInputValue="None"
                            options={benefits}
                            name="parentId"
                          />
                        </div>

                        <div className="col-md-4">
                          <FormSelect
                            options={[
                              { value: "None", key: 1 },
                              {
                                value: "Number of days",
                                key: 2,
                              },
                            ]}
                            placeholder="Amount"
                            label="Requirement"
                            // type="number"
                            name="depends"
                          />
                        </div>

                        <div className="col-md-12">
                          <FormInput
                            placeholder="Description"
                            name="description"
                            label="Description"
                            multiline
                          />
                        </div>

                        <div className="col-md-12 mt-3 d-flex">
                          <SubmitButton title="Submit" />
                          {/* <button type="submit" className="btn btn-primary">
                            Submit
                          </button> */}

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

      {/* <div className="col-lg-12">
        <BasicTable
          page="Benefits"
          columns={columns}
          rows={wages}
          handleEdit={handleUpdate}
          handleDelete={handleDestroy}
        />
      </div> */}
    </div>
  );
};

export default Benefits;
