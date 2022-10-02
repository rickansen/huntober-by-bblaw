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

console.log(
  decodeString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."),
  "PRO-TIP #498: IT'S NICE TO SAY HELLO."
);
