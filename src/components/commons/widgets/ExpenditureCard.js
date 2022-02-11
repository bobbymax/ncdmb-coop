const ExpenditureCard = ({
  expenditure,
  addToBatch,
  isButtonOff,
  paymentType,
  maxed,
}) => {
  return (
    <tr>
      <td>
        <button
          className="btn btn-warning btn-sm"
          type="button"
          onClick={() => addToBatch(expenditure)}
          disabled={
            (isButtonOff && expenditure.payment_type !== paymentType) || maxed
          }
        >
          <i className="fa fa-file-plus"></i>
        </button>
      </td>
      <td>
        {expenditure.subBudgetHead
          ? expenditure.subBudgetHead.budgetCode
          : expenditure.sub_budget_head_id}
      </td>
      <td>{expenditure.payment_type.toUpperCase()}</td>
      <td>{expenditure.description}</td>
      <td>{expenditure.amount}</td>
    </tr>
  );
};

export default ExpenditureCard;
