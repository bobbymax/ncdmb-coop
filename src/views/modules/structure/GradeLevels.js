/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import BasicTable from "../../../components/commons/tables/BasicTable";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import SubmitButton from "../../../components/forms/SubmitButton";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import { validate } from "../../../services/utils/validation";
import Alert from "../../../services/classes/Alert";
import {
  collection,
  alter,
  store,
  destroy,
} from "../../../services/utils/controllers";
import useApi from "../../../services/hooks/useApi";

const GradeLevels = () => {
  const {
    request,
    data: gradeLevels,
    setData: setGradeLevels,
  } = useApi(collection);

  useEffect(() => {
    request("gradeLevels");
  }, []);

  const initialState = {
    id: 0,
    name: "",
    code: "",
  };

  const rules = [
    { name: "name", rules: ["required", "string"] },
    { name: "code", rules: ["required", "string"] },
  ];

  const [state, setState] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const columns = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Code",
      key: "code",
    },
  ];

  const handleUpdate = (data) => {
    // console.log(data);
    setState(data);
    setUpdate(true);
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      code: state.code,
    };

    const formErrors = validate(rules, data);
    setErrors(formErrors);

    const status =
      Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

    if (status) {
      if (update) {
        try {
          alter("gradeLevels", state.id, data)
            .then((res) => {
              const result = res.data.data;

              setGradeLevels(
                gradeLevels.map((el) => {
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
          store("gradeLevels", data)
            .then((res) => {
              const result = res.data.data;
              setGradeLevels([result, ...gradeLevels]);
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
      // setOpen(false);
    }
  };

  const handleDestroy = (data) => {
    Alert.flash(
      "Are you sure?",
      "warning",
      "You would not be able to revert this!!"
    ).then((result) => {
      if (result.isConfirmed) {
        destroy("gradeLevels", data.id)
          .then((res) => {
            setGradeLevels([
              ...gradeLevels.filter((level) => level.id !== res.data.data.id),
            ]);
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
            <i className="fa fa-plus-square"></i> Add Grade Level
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="form-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <TextInputField
                          value={state.name}
                          type="text"
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          name="name"
                          placeholder="Grade Level Name"
                          error={
                            errors && errors.name && errors.name.length > 0
                          }
                          errorMessage={errors && errors.name && errors.name[0]}
                        />
                      </div>

                      <div className="col-md-6">
                        <TextInputField
                          value={state.code}
                          type="text"
                          onChange={(e) =>
                            setState({ ...state, code: e.target.value })
                          }
                          name="code"
                          placeholder="Grade Level Code"
                          error={
                            errors && errors.code && errors.code.length > 0
                          }
                          errorMessage={errors && errors.code && errors.code[0]}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 mt-3 d-flex">
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="col-lg-12">
        <BasicTable
          page="Grade Levels"
          columns={columns}
          rows={gradeLevels}
          handleEdit={handleUpdate}
          handleDelete={handleDestroy}
        />
      </div>
    </div>
  );
};

export default GradeLevels;
