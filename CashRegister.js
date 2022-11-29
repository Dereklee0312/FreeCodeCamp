// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
//
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
//
// See below for an example of a cash-in-drawer array:
//
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  let amtDue = cash - price;
  let change = [];
  let total = 0;
  // let equals = {
  //   0.05: "NICKEL",
  //   0.01: "PENNY",
  //   0.1: "DIME",
  //   0.25: "QUARTER",
  //   1: "ONE",
  //   5: "FIVE",
  //   10: "TEN",
  //   20: "TWENTY",
  //   100: "ONE HUNDRED",
  // };
  // let equals = {
  //   NICKEL: 0.05,
  //   PENNY: 0.01,
  //   DIME: 0.1,
  //   QUARTER: 0.25,
  //   ONE: 1,
  //   FIVE: 5,
  //   TEN: 10,
  //   TWENTY: 20,
  //   "ONE HUNDRED": 100,
  // };

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
  // for (var value in equals) {
  //   console.log(value);
  // }
  //
  // for (var i = cid.length - 1; i >= 0; i--) {
  //   // Deduct amt if change available
  //   if (amtDue >= cid[i][1]) {
  //     change.push(cid[i]);
  //     amtDue -= cid[i][1];
  //   } else {
  //   }
  //   console.log(amtDue);
  // }

  for (var i = cid.length - 1; i >= 0; i--) {
    total += cid[i][1];
  }
  if (total < amtDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total == amtDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (var i = cid.length - 1; i >= 0; i--) {
      // console.log(cid[i][1], equals[cid[i][0]]);
      if (amtDue > cid[i][1]) {
        change.push(cid[i][0], cid[i][1]);
        amtDue -= cid[i][1];
      // } else if (amtDue < cid[i][1] && amtDue > equals[cid[i][0]]) {
      } else if (amtDue > equals[cid[i][0]]) {
        // console.log(amtDue, cid[i][1], equals[cid[i][0]]);
        console.log(
          `DUE: ${amtDue}, CID: ${cid[i][1]}, EQUALS: ${equals[cid[i][0]]}`
        );
      }
    }
  }
}
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
]);
