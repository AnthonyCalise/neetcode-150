// O(n * k * log k)
function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const anagrams: { [key: string]: string[] } = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedWord = [...strs[i]].sort().join(",");
    if (anagrams[sortedWord]) anagrams[sortedWord].push(strs[i]);
    else anagrams[sortedWord] = [strs[i]];
  }

  for (const key in anagrams) {
    result.push(anagrams[key]);
  }
  return result;
}
