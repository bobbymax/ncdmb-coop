/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { formatCurrency } from "../../../services/utils/helpers";
import { collection } from "../../../services/utils/controllers";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import CustomSelect from "../../../components/forms/CustomSelect";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";

const columns = [
  {
    label: "Budget Code",
    key: "budgetCode",
  },
  {
    label: "Budget Name",
    key: "name",
  },
  {
    label: "Approved Amount",
    key: "approved_amount",
  },
  {
    label: "Booked Expenditure",
    key: "booked_expenditure",
  },
  {
    label: "Actual Expenditure",
    key: "actual_expenditure",
  },
  {
    label: "Booked Balance",
    key: "booked_balance",
  },
  {
    label: "Actual Balance",
    key: "actual_balance",
  },
  {
    label: "Expected Performace",
    key: "expected_performance",
  },
  {
    label: "Actual Performance",
    key: "actual_performance",
  },
  // {
  //   label: "View Breakdrown",
  // },
];

const Overview = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState(0);
  const auth = useSelector((state) => state.auth.value.user);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term !== "") {
      const newFiltered = data.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });

      setResults(newFiltered);
    } else {
      setResults(data);
    }
  };

  useEffect(() => {
    const id = auth.department_id;

    if (auth && auth.department_id) {
      collection("departments/" + id + "/budget/summary")
        .then((res) => {
          setData(res.data.data);
          setDepartment(id);
        })
        .catch((err) => console.log(err.message));
    }
  }, [auth.department_id]);

  useEffect(() => {
    collection("departments")
      .then((res) => {
        setDepartments(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (value) => {
    if (value > 0) {
      collection("departments/" + value + "/budget/summary")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const filterOptions = (optionsArr) => {
    const arr = [];
    optionsArr.length > 0 &&
      optionsArr.forEach((el) => {
        arr.push({ key: el.id, label: el.name });
      });
    return arr;
  };

  const headers = [
    { label: "Budget Head Id", key: "budget_head_id" },
    { label: "Department Code", key: "department_code" },
    { label: "Budget Code", key: "budgetCode" },
    { label: "Name", key: "name" },
    { label: "Logistics Budget", key: "logisticsBudget" },
    { label: "Approved Amount", key: "approved_amount" },
    { label: "Booked Expenditure", key: "booked_expenditure" },
    { label: "Actual Expenditure", key: "actual_expenditure" },
    { label: "Booked Balance", key: "booked_balance" },
    { label: "Actual Balance", key: "actual_balance" },
    { label: "Expected Performance", key: "expected_performance" },
    { label: "Actual Performance", key: "actual_performance" },
  ];

  const handleViewBreakdown = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <CustomSelect
            options={filterOptions(departments)}
            defaultText="Select Department"
            label="Departments"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              handleChange(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3
                    style={{
                      color: "black",
                      fontSize: 10,
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    Approved Amount
                  </h3>

                  <h6 style={{ fontSize: 18 }} className="text-black">
                    {data.length > 0
                      ? formatCurrency(data[0].totals.appAmount)
                      : "N " + 0}
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-warning">
                <div className="card-body">
                  <h2
                    className="text-white font-w600"
                    style={{ fontSize: 10, textTransform: "uppercase" }}
                  >
                    Actual Expenditure
                  </h2>

                  <h5 style={{ fontSize: 18 }} className="text-white">
                    {data.length > 0
                      ? formatCurrency(data[0].totals.actExp)
                      : "N " + 0}
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-primary">
                <div className="card-body">
                  <h2
                    style={{ fontSize: 10, textTransform: "uppercase" }}
                    className="text-white font-w600"
                  >
                    Actual Balance
                  </h2>

                  <h2 className="text-white" style={{ fontSize: 18 }}>
                    {data.length > 0
                      ? formatCurrency(data[0].totals.actBal)
                      : "N" + 0}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <DataTableComponent
            pageName="Sub Budget Heads"
            columns={columns}
            rows={searchTerm.length < 1 ? data : results}
            term={searchTerm}
            downloadButton={
              <div className="pull-right">
                <CSVLink
                  className="btn btn-success btn-md"
                  data={data}
                  headers={headers}
                  filename="Budget Overview"
                >
                  <i className="fa fa-download"></i> Download CSV
                </CSVLink>
              </div>
            }
            action={handleViewBreakdown}
            searchKeyWord={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
