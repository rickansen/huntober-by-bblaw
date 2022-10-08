const decodeStringSeven = (str) =>
  [...str]
    .map((x) => (/[a-z]/i.test(x) ? x.charCodeAt() : x))
    .map((x) =>
      typeof x === 'number'
        ? x < 97
          ? String.fromCharCode(26 - (x - 65) + 96)
          : String.fromCharCode(26 - (x - 97) + 64)
        : x
    )
    .join('');

console.log(
  decodeStringSeven('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'),
  'Example: 0 number or punctuation changes'
);

// string to decrypt - "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
