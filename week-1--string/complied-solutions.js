function decodeString(str) {
  let convert = {
    0: 'O',
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'h',
    5: 'S',
    6: 'G',
    7: 'L',
    8: 'B',
    9: 'q',
  };

  return [...str]
    .map((x) =>
      x in convert
        ? convert[x]
        : Object.values(convert).includes(x)
        ? Object.entries(convert).find((a) => a[1] === x)[0]
        : x
    )
    .join('');
}

function decodeStringTwo(str) {
  return [...str.slice(str.indexOf('c') + 1).replaceAll('Eek!', '')]
    .reverse()
    .join('')
    .split('v')
    .slice(1)
    .map((x) => x[0])
    .join('');
}

function decodeStringThree(str) {
  return str.replaceAll(/[Space]/g, ' ');
}

function decodeStringFour(str) {
  return [...str].reverse().join('');
}

function decodeStringSix(str) {
  const key = 3;
  return [...str].filter((x, y) => (y + 1) % key !== 0).join('');
}

function compiledDecodeFuncs(str) {
  const day1 = decodeString(str);
  const day3 = decodeStringThree(day1);
  const day4 = decodeStringFour(day3);
  const day6 = decodeStringSix(day4);
  return day6;
}

console.log(
  compiledDecodeFuncs(
    'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'
  )
);

// string to decrypt - "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
