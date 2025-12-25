def arePermutationsPY(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False

    character_frequencies: dict[str, int] = {}

    for character in str1:
        character_frequencies[character] = character_frequencies.get(character, 0) + 1

    for character in str2:
        does_character_exist_on_map = character_frequencies[character]

        if not does_character_exist_on_map:
            return False

        character_frequencies[character] -= 1

    return True


print(arePermutationsPY("aab", "abb"))
print(arePermutationsPY("aab", "aba"))
