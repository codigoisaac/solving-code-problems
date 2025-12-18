function arePermutationsJS(str1, str2) {
  console.log("\n....................................\n");
  console.log(
    `Checking if the strings "${str1}" and "${str2}" are permutations...\n`
  );

  const isSameLength = str1.length === str2.length;

  if (!isSameLength) return false;

  // Create an object which stores how many times
  // each character appears in the first string
  console.log("...\n");
  console.log("> Build frequency map for str1:\n");

  const characterFrequencies = {};

  for (const character of str1) {
    characterFrequencies[character] =
      (characterFrequencies[character] || 0) + 1;

    console.log(
      character,
      ": occurrence",
      characterFrequencies[character],
      "; map:",
      characterFrequencies
    );
  }

  // Loop through the second string subtracting 1 from the map above
  // for each character that also appears in the second string.
  console.log("\n...\n");
  console.log("> Subtract frequencies while scanning str2:\n");

  for (const character of str2) {
    // 0 == false
    const doesCharacterExistOnMap = characterFrequencies[character];

    console.log(
      "Character",
      '"',
      character,
      '"',
      doesCharacterExistOnMap
        ? "does match the map. Subtracting it..."
        : "does not match the map. \n>>> The strings are not permutations.\n"
    );

    if (!doesCharacterExistOnMap) return false;

    characterFrequencies[character]--;

    console.log("Updated frequency map:", characterFrequencies, "\n");
  }

  return true;
}

console.log("...\n\n:::Result:", arePermutationsJS("aab", "abb"), "\n");

console.log("...\n\n:::Result:", arePermutationsJS("aab", "aba"), "\n");
