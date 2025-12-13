function arePermutations(str1, str2) {
  console.log("\n....................................\n");
  console.log(
    `Checking if the strings "${str1}" and "${str2}" are permutations...\n`
  );

  const isSameLength = str1.length === str2.length;

  if (!isSameLength) return false;

  //
  console.log("...\n");
  console.log("> Build frequency map for str1:\n");

  const characterFrequencies = {};

  for (const character of str1) {
    characterFrequencies[character] =
      (characterFrequencies[character] || 0) + 1;

    console.log(
      character,
      characterFrequencies[character],
      characterFrequencies
    );
  }

  //
  console.log("\n...\n");
  console.log("> Subtract frequencies while scanning str2:\n");

  for (const character of str2) {
    const doesCharacterExistOnMap = characterFrequencies[character];

    console.log(
      "Character",
      '"',
      character,
      '"',
      doesCharacterExistOnMap
        ? "does match the map. Subtracting it..."
        : "does not match the map. \n>>> The strings are not permutations."
    );

    if (!doesCharacterExistOnMap) return false;

    characterFrequencies[character]--;

    console.log("Updated frequency map:", characterFrequencies);
  }

  return true;
}

console.log("\n...\n\nResult:", arePermutations("aab", "abb"), "\n");

console.log("\n...\n\nResult:", arePermutations("aab", "aba"), "\n");
