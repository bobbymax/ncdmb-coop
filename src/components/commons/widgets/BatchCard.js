const BatchCard = ({ batch, onRemove }) => {
  return (
    <div className="card " style={{ height: 150, lineHeight: "15px" }}>
      <div className="card-body">
        <div className="d-flex align-items-start justify-content-between mb-10">
          <h1 className="card-title">
            {new Intl.NumberFormat().format(batch.amount)}
          </h1>

          <div className="chart-wrapper">
            <p
              style={{ cursor: "pointer", fontSize: 13 }}
              onClick={() => onRemove(batch)}
              className="text-danger"
            >
              <i className="fa fa-close"></i> Remove
            </p>
          </div>
        </div>

        <h5 className="card-title tx-primary">{batch.beneficiary}</h5>
        <p className="card-desc">{batch.description}</p>
      </div>
    </div>
  );
};

export default BatchCard;
