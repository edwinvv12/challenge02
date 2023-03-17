function getAngkaTerbesarKedua(dataNumbers) {
  if (dataNumbers === undefined) {
    return "ERROR : YOUR DATA IS UNDEFINED";
  }

  if (!Array.isArray(dataNumbers)) {
    return "ERROR : DATA MUST BE A ARRAY";
  }

  const sorting = dataNumbers.sort((a, b) => b - a);

  let scndLarge = null;
  for (let i = 0; i < sorting.length; i++) {
    if (sorting[i] < sorting[0]) {
      scndLarge = sorting[i];
      break;
    }
  }

  if (scndLarge === null) {
    return null;
  }

  return scndLarge;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
