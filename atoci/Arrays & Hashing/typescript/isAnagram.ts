export function isAnagram(s: string, t: string): boolean {

    if (s.length != t.length) {
        return false
    }

    const mymap: {[key: string]: number} = {};

    for (let index = 0; index < s.length; index++) {
        mymap[s[index]] = 0;
    }

    for (let index = 0; index < s.length; index++) {
        mymap[s[index]]++;
    }
    
    for (let index = 0; index < t.length; index++) {
        if (t[index] in mymap) {
            mymap[t[index]]--;
        } else {
            return false;
        }
    }

    for (const key in mymap) {
        if (mymap[key] != 0) {
            return false;
        }
    }

    return true; 
};

console.log(isAnagram('fag','gaf'))
console.log(isAnagram('faga','gafa'))
console.log(isAnagram('fago','gafa'))