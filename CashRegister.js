function checkCashRegister(price, cash, cid) {
  let amtDue = cash - price;
  let Change = [];
  let total = 0;
  let numChange;

  let equals = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  for (var i = cid.length - 1; i >= 0; i--) {
    total += cid[i][1];
  }
  if (total < amtDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total == amtDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (var i = cid.length - 1; i >= 0; i--) {
      if (amtDue > cid[i][1]) {
        Change.push([cid[i][0], cid[i][1]]);
        amtDue -= cid[i][1];
      } else if (amtDue > equals[cid[i][0]]) {
        numChange = Math.floor(
          parseFloat(amtDue.toFixed(2)) / equals[cid[i][0]]
        );
        console.log(amtDue, numChange, equals[cid[i][0]]);
        amtDue -= equals[cid[i][0]] * numChange;
        Change.push([cid[i][0], equals[cid[i][0]] * numChange]);
      }
    }
    if (parseFloat(amtDue.toFixed(2)) > 0){
    return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: Change };
  }
}
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
