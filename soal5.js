function getSplitName(givenNumber) {
  if (typeof givenNumber !== "string") {
    return "ERROR : DATA MUST BE A STRING";
  }

  const arraynama = givenNumber.split(" ");

  if (arraynama.length > 3) {
    return "ERROR : THIS FUNCTION IS ONLY FOR 3 CHARACTERS NAME";
  }

  const result = {};

  result.firstName = arraynama[0];
  result.middleName = arraynama[1];
  result.lastName = arraynama[2];

  return result;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
