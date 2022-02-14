const BatchCard = ({ batch, onRemove }) => {
  return (
    <div className="card" style={{ height: 150, lineHeight: "15px" }}>
      <div className="card-body">
        <div className="d-flex align-items-start justify-content-between mb-10">
          <h1 className="card-title">
            &#8358; {new Intl.NumberFormat().format(batch.amount)}
          </h1>

          <div className="">
            <p
              style={{ cursor: "pointer", fontSize: 13 }}
              onClick={() => onRemove(batch)}
              className="text-danger"
            >
              <i className="fa fa-close"></i> Remove
            </p>
          </div>
        </div>

        <span className="card-title tx-primary">{batch.beneficiary}</span>
        <p className="card-desc">{batch.description}</p>
      </div>
    </div>
  );
};

export default BatchCard;
