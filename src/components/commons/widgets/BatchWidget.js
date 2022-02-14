import React from "react";

function BatchWidget({ data, addToBatch, isButtonOff, paymentType, maxed }) {
  if (data) {
    return (
      <div className="drag-n-drop">
        {data.map((grp) => (
          <div className="dnd-group bg-success" key={grp.id}>
            <h4 className="text-white">{grp.title}</h4>

            {grp.items.length > 0 ? (
              grp.items.map((item) => (
                <div className="dnd-item" key={item.id}>
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

                  <div>
                    <h3 className="card-title">
                      BUDGET CODE: {item.subBudgetHead.budgetCode}
                    </h3>
                    <h3>AMOUNT: {item.amount}</h3>
                    <h3>PAYMENT TYPE: {item.payment_type.toUpperCase()}</h3>
                    <h3>Description: {item.description}</h3>
                  </div>
                </div>
              ))
            ) : (
              <span className="w-100 text-danger">No Expenditure Data</span>
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
