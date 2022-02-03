import React, { useEffect, useState } from "react";
import FormInput from "../../../components/forms/FormInput";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import Form from "../../../components/forms/Form";
import SubmitButton from "../../../components/forms/SubmitButton";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";

const Claims = () => {
  const { loading: isLoading, request, data: claims } = useApi(collection);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const columns = [
    { label: "Title", key: "title" },
    { label: "Amount", key: "total_amount" },
  ];

  // const handleUpdate = data => {
  //     //
  // }

  // const handleDestroy = data => {

  // }

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = claims.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(claims);
    }
  };

  useEffect(() => {
    request("claims");
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button className="btn btn-success" onClick={() => setOpen(true)}>
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
                        tite: "",
                      }}
                      onSubmit={(value) => console.log(value)}
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
                            disabled={open}
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
        <DataTableComponent
          pageName="Claims"
          columns={columns}
          rows={searchTerm.length < 1 ? claims : results}
          term={searchTerm}
          searchKeyWord={handleSearch}
          isFetching={isLoading}
        />
      </div>
    </div>
  );
};

export default Claims;
