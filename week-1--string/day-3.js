function decodeStringThree(str) {
  return str.replaceAll(/[Space]/g, ' ');
}

console.log(
  decodeStringThree(
    'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'
  )
);

// day 2 - Key: Space

// string to decrypt - "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
