import React, { useEffect, useState } from "react";
import { create } from "apisauce";
import { collection } from "./services/utils/controllers";
import { debounce } from "lodash";
import authHeader from "./services/utils/auth/auth.header";

const apiClient = create({
  baseURL: "http://budget-portal-api.com.ng/api/",
  headers: authHeader(),
});

const TestDebounce = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = debounce(async () => {
    setLoading(true);
    const res = await apiClient.get("subBudgetHeads");
    setData(res.data.data);
    setLoading(false);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Test Debounce</h2>

      <div>
        <h2>SubBudget Head</h2>

        {loading && <i className="fa fa-spinner fa-lg fa-spin"></i>}

        {data &&
          data.map((d, i) => (
            <p style={{ fontWeight: "bolder" }} key={i}>
              {d.budgetHead.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TestDebounce;
