import React, { useState, useRef, useEffect } from "react";
// import "./drag.css";

function BatchWidget({ data, addToBatch, isButtonOff, paymentType, maxed }) {
  if (data) {
    return (
      <div className="drag-n-drop">
        {data.map((grp, grpI) => (
          <div className="dnd-group bg-success" key={grpI}>
            <h4 className="text-white">{grp.title}</h4>

            {grp.items.map((item, index) => (
              <div className="dnd-item" key={item.id}>
                <div className="justify-content-end">
                  <button
                    className="btn btn-primary btn-sm pull-right"
                    onClick={() => addToBatch(item)}
                    disabled={
                      (isButtonOff && item.payment_type !== paymentType) ||
                      maxed
                    }
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>

                <div>
                  <h3 className="card-title">
                    BUDGET CODE: {item.subBudgetHead.budgetCode}
                  </h3>
                  <h3>AMOUNT: {item.amount}</h3>
                  <h3>PAYMENT TYPE: {item.payment_type.toUpperCase()}</h3>
                  <h3>Description: {item.description}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default BatchWidget;
