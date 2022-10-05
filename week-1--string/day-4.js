function decodeStringFour(str) {
  return str.replaceAll(/[Space]/g, ' ');
}

console.log(
  decodeStringFour(
    "   The white space at the beginning of this string doesn't match the whitespace at the end. "
  ),
  " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
);

// day 2 - Key: Space

// string to decrypt - "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
