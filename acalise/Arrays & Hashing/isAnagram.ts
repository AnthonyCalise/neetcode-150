//O(n log n)
function isAnagram(s: string, t: string): boolean {
  return [...s].sort().toString() === [...t].sort().toString();
}

// O(n)
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let sLetterCounts = addLettersToMap(s);
  let tLetterCounts = addLettersToMap(t);
  for (let i = 0; i < s.length; i++) {
    if (sLetterCounts[s[i]] !== tLetterCounts[s[i]]) return false;
  }
  return true;
}

//Helper function for isAnagram2
function addLettersToMap(str: string): any {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (typeof map[letter] === "number") {
      map[letter]++;
    } else {
      map[letter] = 1;
    }
  }
  return map;
}
