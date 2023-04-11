//O(n log n)
function isAnagram(s: string, t: string): boolean {
  return [...s].sort().toString() === [...t].sort().toString();
}
