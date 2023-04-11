function isAnagram1(s: string, t: string): boolean {
  let arr1 = s.split("").sort();
  let arr2 = t.split("").sort();
  return arr1.join("") === arr2.join("");
}

function isAnagram2(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
