function groupAnagrams(words : string[]): string[][] {
  const mymap: {[key:string]: string[]} = {};
  const results: string[][] = [];

  for (const word of words) {
    let key = word.split('').sort().join('');
    
    if (!mymap[key]) {
      mymap[key] = []; 
    }

    mymap[key].push(word)
  }

  for (const key in mymap) {
    results.push(mymap[key])
  }

  return results 
};


const input_a = ["eat","tea","tan","ate","nat","bat"]
const input_b = ["a"]
const input_c = ["",""]
const input_d = ["aba", "aba","baa"]
const input_e = ["tea","","eat","","tea",""]


console.log(groupAnagrams(input_a))
console.log(groupAnagrams(input_b))
console.log(groupAnagrams(input_c))
console.log(groupAnagrams(input_d))
console.log(groupAnagrams(input_e))