import { formatCurrency } from "../../../services/utils/helpers";

const BatchCard = ({ batch, onRemove }) => {
  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 mb-3">
              <h5 className="text-muted">{batch.description}</h5>
            </div>
            <div className="col-md-2 mb-3">
              <button
                className="btn btn-danger btn-xs btn-rounded"
                onClick={() => onRemove(batch)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
            <div className="col-md-12">
              <h5 className="text-warning mb-0">{batch.beneficiary}</h5>
              <p className="text-success">{formatCurrency(batch.amount)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchCard;
