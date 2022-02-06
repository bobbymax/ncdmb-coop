/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BasicTable from "../../../components/commons/tables/BasicTable";
import BenefitsWidget from "../../../components/commons/widgets/BenefitsWidget";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import Alert from "../../../services/classes/Alert";
import {
  collection,
  alter,
  store,
  destroy,
} from "../../../services/utils/controllers";
import { validate } from "../../../services/utils/validation";
import useApi from "../../../services/hooks/useApi";
import AddEntitlements from "./AddEntitlements";

const Benefits = () => {
  const { data: benefits, setData: setBenefits, request } = useApi(collection);

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

  const modalState = {
    entity: null,
    visibility: false,
  };

  const [state, setState] = useState(initialState);
  const [modalShow, setModalShow] = useState(modalState);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [options, setOptions] = useState([]);

  const getBenefits = () => {
    collection("benefits")
      .then((res) => setOptions(res.data.data))
      .catch((err) => console.log(err));
  };

  const rules = [
    { name: "name", rules: ["required", "string"] },
    { name: "parentId", rules: ["required", "integar"] },
    { name: "numOfDays", rules: ["required"] },
    { name: "description", rules: ["required"] },
  ];

  const handleUpdate = (data) => {
    setState(data);
    setUpdate(true);
    setOpen(true);
  };

  const requirementOptions = [
    { key: "0", label: "None" },
    { key: "1", label: "Number of Days" },
  ];

  const handleModalEvent = (data) => {
    console.log(data);

    setModalShow({
      ...modalShow,
      entity: data,
      visibility: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      parentId: state.parentId,
      numOfDays: state.depends,
      description: state.description,
    };

    const formErrors = validate(rules, data);
    setErrors(formErrors);

    const status =
      Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

    if (status) {
      if (update) {
        try {
          alter("benefits", state.id, data)
            .then((res) => {
              const result = res.data.data;

              setBenefits(
                benefits.map((el) => {
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
          store("benefits", data)
            .then((res) => {
              const result = res.data.data;
              setBenefits([result, ...benefits]);
              Alert.success("Created!!", res.data.message);
            })
            .catch((err) => console.log(err.message));
        } catch (error) {
          console.log(error);
        }
      }

      setErrors({});

      setUpdate(false);
      setState(initialState);
      setOpen(false);
    }
  };

  const handleDestroy = (data) => {
    Alert.flash(
      "Are you sure?",
      "warning",
      "You would not be able to revert this!!"
    ).then((result) => {
      if (result.isConfirmed) {
        destroy("priceLists", data.id)
          .then((res) => {
            setBenefits([
              ...benefits.filter((price) => price.id !== res.data.data.id),
            ]);
            Alert.success("Deleted!!", res.data.message);
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  useEffect(() => {
    request("benefits");
    getBenefits();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button
            className="btn btn-primary"
            onClick={() => setOpen(!open)}
            disabled={open}
          >
            <i className="fa fa-plus-square"></i> Add Benefit
          </button>
        </div>
      </div>

      <AddEntitlements show={modalShow.visibility} />

      {open && (
        <>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="form-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                        <TextInputField
                          placeholder="Enter Grade Level Name"
                          label="Benefit title"
                          type="text"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          error={
                            errors && errors.name && errors.name.length > 0
                          }
                          errorMessage={errors && errors.name && errors.name[0]}
                        />
                      </div>

                      <div className="col-md-4">
                        <CustomSelect
                          defaultText="Select Benefit"
                          label="Select Parent"
                          options={options}
                          value={state.parentId}
                          onChange={(e) =>
                            setState({ ...state, parentId: e.target.value })
                          }
                          error={
                            errors &&
                            errors.parentId &&
                            errors.parentId.length > 0
                          }
                          errorMessage={
                            errors && errors.parentId && errors.parentId[0]
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <CustomSelect
                          label="Requirement"
                          // defaultText="None"
                          // defaultInputValue="None"
                          options={requirementOptions}
                          value={state.depends}
                          onChange={(e) =>
                            setState({ ...state, depends: e.target.value })
                          }
                          error={
                            errors &&
                            errors.depends &&
                            errors.depends.length > 0
                          }
                          errorMessage={
                            errors && errors.depends && errors.depends[0]
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        <TextInputField
                          placeholder="Description"
                          type="text"
                          multiline={2}
                          value={state.description}
                          onChange={(e) =>
                            setState({ ...state, description: e.target.value })
                          }
                          error={
                            errors &&
                            errors.description &&
                            errors.description.length > 0
                          }
                          errorMessage={
                            errors &&
                            errors.description &&
                            errors.description[0]
                          }
                        />
                      </div>
                      <div className="col-md-12 mt-3">
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
                            setErrors({});
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Parent</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {benefits ? (
                    benefits.map((benefit) => {
                      return (
                        <BenefitsWidget
                          key={benefit.id}
                          benefit={benefit}
                          onEdit={handleUpdate}
                          onDestroy={handleDestroy}
                          modalControl={handleModalEvent}
                        />
                      );
                    })
                  ) : (
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
      </div>
    </div>
  );
};

export default Benefits;
