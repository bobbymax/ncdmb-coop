import React, { useEffect, useState } from "react";
import useApi from "../../services/hooks/useApi";
import { collection } from "../../services/utils/controllers";
import "./drag.css";

import DragNDrop from "./DragNDrop";

function DragDropComponent() {
  const {
    data: expenditures,
    setData: setExpenditures,
    request,
  } = useApi(collection);

  const defaultData = [
    {
      title: "STAFF CLAIM",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "staff-payment";
      }),
    },
    {
      title: "THIRD PARTY",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "third-party";
      }),
    },
    {
      title: "BATCH",
      items: [],
    },
  ];
  const [data, setData] = useState();

  useEffect(() => {
    request("expenditures");
  }, []);

  useEffect(() => {
    if (expenditures > 0) {
      setData(expenditures);
    } else {
      setData(defaultData);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={defaultData} setData={setExpenditures} />
      </header>
    </div>
  );
}

export default DragDropComponent;
