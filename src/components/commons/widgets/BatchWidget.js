import React from "react";

function BatchWidget({ data, addToBatch, isButtonOff, paymentType, maxed }) {
  if (data) {
    return (
      <div className="drag-n-drop">
        {data.map((grp) => (
          <div className="dnd-group bg-success" key={grp.id}>
            <h4 className="group-title">{grp.title}</h4>

            {grp.items.length > 0 ? (
              grp.items.map((item) => (
                <div className="dnd-item" key={item.id}>
                  <h1 className="budget-code text-primary">
                    Budget Code: {item.subBudgetHead.budgetCode}
                  </h1>

                  <hr className="hr" />

                  <div className="">
                    <h3>Amount: {item.amount}</h3>
                    <h3>Payments TYPE: {item.payment_type.toUpperCase()}</h3>
                    <h3>Description: {item.description}</h3>
                  </div>

                  <div className="first-div">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => addToBatch(item)}
                      disabled={
                        (isButtonOff && item.payment_type !== paymentType) ||
                        maxed
                      }
                    >
                      <i className="fa fa-plus mr-1 align-items-center"></i>
                      Batch
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bottom-card">
                <span className="">No Expenditure Data</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default BatchWidget;
