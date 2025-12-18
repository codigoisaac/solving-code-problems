function arePermutationsTS(str1: string, str2: string): boolean {
  const isSameLength = str1.length === str2.length;

  if (!isSameLength) return false;

  const characterFrequencies: Record<string, number> = {};

  for (const character of str1) {
    characterFrequencies[character] =
      (characterFrequencies[character] || 0) + 1;
  }

  for (const character of str2) {
    // 0 == false
    const doesCharacterExistOnMap = characterFrequencies[character];

    if (!doesCharacterExistOnMap) return false;

    characterFrequencies[character]--;
  }

  return true;
}

console.log("\n...\n\nResult:", arePermutationsTS("aab", "abb"), "\n");

console.log("\n...\n\nResult:", arePermutationsTS("aab", "aba"), "\n");
