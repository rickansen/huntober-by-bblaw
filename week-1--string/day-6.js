function decodeStringSix(str, key) {
  return [...str].filter((x, y) => (y + 1) % key !== 0).join('');
}

console.log(
  decodeStringSix('Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!', 4),
  'This is Halloween! This is Halloween!'
);
console.log(
  decodeStringSix('The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.', 5),
  'The Bachelor is a terrible television show.'
);

// string to decrypt - "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// day 5 clue: 3

// // For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// // remove decoy strings
// "This is Halloween! This is Halloween!"

// // For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// // remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."
