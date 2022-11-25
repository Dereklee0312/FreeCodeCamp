function rot13(str) {
  var alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var newstr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(alphabets.includes(str[i]));
    if (alphabets.includes(str[i])) {
      index = alphabets.indexOf(str[i]) + 13;
      if (index > 25) {
        index = index - 25 - 1;
      }
      // console.log(alphabets[index]);
      newstr += alphabets[index];
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
