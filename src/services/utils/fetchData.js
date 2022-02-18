const labels = [];

const subBudgetHead = {
  expenditures: [
    {
      amount: 500000000,
      updated: "",
    },
  ],
};

// loop through the expenditures

// subBudgetHead.expenditures.map(exp => {
//     let sumArr = []

//     labels.map(month => (
//         exp.updated === month && sumArr.push({
//             amount: exp.amount,
//             updated: exp.updated
//         })
//     ))

// })

const sumAmounts = (arr, key) => {
  return arr.reduce((a, b) => a + (b[key] || 0), 0);
};

labels.map((month) => {
  let monArr = [];
  let result = {};

  subBudgetHead.expenditures.map(
    (exp) =>
      month === exp.updated &&
      monArr.push({
        amount: exp.amount,
        updated: exp.updated,
      })
  );

  result["month"] = month;
  result["total_amount"] = sumAmounts(monArr, "amount");

  return result;
});
